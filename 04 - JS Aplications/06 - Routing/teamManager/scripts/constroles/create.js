import { createTeam } from '../data.js';

export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        createForm: await this.load('./templates/create/createForm.hbs')
    }

    this.partial('./templates/create/createPage.hbs', this.app.userData);
}

export async function createPost() {
    if (this.params.name.trim() !== "") {
        const team = {
            name: this.params.name,
            comment: this.params.comment
        }

        try {
            const result = await createTeam(team);
            if (result.hasOwnProperty("errorData")) {
                const error = new Error();
                Object.assign(error, result);
                throw error;
            }
            this.app.userData.hasTeam = true;
            this.app.userData.teamId = result.objectId;
            this.redirect(`#/catalog/${result.objectId}`);
        } catch (err) {
            console.error(err)
            alert(err.message)
        }

    } else {
        alert('Team name is required!')
    }
}
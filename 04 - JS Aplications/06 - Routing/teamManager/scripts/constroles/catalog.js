import {getTeams} from '../data.js'
export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        team: await this.load('./templates/catalog/team.hbs')
    }

    const teams = await getTeams();
    const data = Object.assign({teams}, this.app.userData);
    // data.teams = [
    //     {
    //         teamId: '1231',
    //         name: "Panda",
    //         comment: "Panda is the best"
    //     },
    //     {
    //         teamId: '4234',
    //         name: "Pantera",
    //         comment: "Pantera is the strongest"
    //     },
    //     {
    //         teamId: '4342',
    //         name: "Pumma",
    //         comment: "Pumma is the coolest"
    //     }
    // ]
    this.partial('./templates/catalog/teamCatalog.hbs', data);
}
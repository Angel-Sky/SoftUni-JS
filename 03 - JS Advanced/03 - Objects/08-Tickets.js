function tickets(arr, criteria) {
    class Tickets {
        constructor(descriptor) {
            let [destination, price, status] = descriptor.split("|");
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    return arr
        .map(ticket => new Tickets(ticket))
        .sort(sortByCriteria);


    function sortByCriteria(a, b) {
        try {
            return a[criteria].localeCompare(b[criteria]);
        } catch(e) {
            return a[criteria] - b[criteria];
        }
    }
}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)
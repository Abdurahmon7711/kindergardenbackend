const button = document.querySelector('#closeBtn');
const block = document.querySelector('#Block');
const OpenText = document.querySelector('.OpenText');


const form1 = document.querySelector('#ageform_3_5');
const form2 = document.querySelector('#ageform_6_7');
const form3 = document.querySelector('#ageform_8_12');






function random_hex() {
    return "#" +  Math.floor(Math.random() * 16777215).toString(16);
}


document.addEventListener('DOMContentLoaded', async (e) => {
    const response = await fetch('/api/get_statistic');
    const data = await response.json();

    console.log(data);


    const age3_5_book = data.age3_5.books;
    const age3_5_source = data.age3_5.sources;

    const age6_7_book = data.age6_7.books;
    const age6_7_source = data.age6_7.sources;

    const age8_12_book = data.age8_12.books;
    const age8_12_source = data.age8_12.sources;



    age3_5_booknames = [];
    age3_5_bookstats = [];
    age3_5_bookColors = [];

    age6_7_booknames = [];
    age6_7_bookstats = [];
    age6_7_bookColors = [];

    age8_12_booknames = [];
    age8_12_bookstats = [];
    age8_12_bookColors = [];

    age3_5_sourcenames = [];
    age3_5_sourcestats = [];
    age3_5_sourceColors = [];

    age6_7_sourcenames = [];
    age6_7_sourcestats = [];
    age6_7_sourceColors = [];

    age8_12_sourcenames = [];
    age8_12_sourcestats = [];
    age8_12_sourceColors = [];

    age3_5_book.forEach(book => {
        age3_5_booknames.push(book.name);
        age3_5_bookstats.push(book.count);
        age3_5_bookColors.push(random_hex());
    }
    );

    console.log(age6_7_book)

    age6_7_book.forEach(book => {
        age6_7_booknames.push(book.name);
        age6_7_bookstats.push(book.count);
        age6_7_bookColors.push(random_hex());
    }

    );

    age8_12_book.forEach(book => {
        age8_12_booknames.push(book.name);
        age8_12_bookstats.push(book.count);
        age8_12_bookColors.push(random_hex());
    }
    );

    age3_5_source.forEach(source => {
        age3_5_sourcenames.push(source.name);
        age3_5_sourcestats.push(source.count);
        age3_5_sourceColors.push(random_hex());
    }
    );

    age6_7_source.forEach(source => {
        age6_7_sourcenames.push(source.name);
        age6_7_sourcestats.push(source.count);
        age6_7_sourceColors.push(random_hex());
    }

    );

    age8_12_source.forEach(source => {
        age8_12_sourcenames.push(source.name);
        age8_12_sourcestats.push(source.count);
        age8_12_sourceColors.push(random_hex());
    }
    );

    // start from chart1
    new Chart("myChart1", {
        type: "pie",
        data: {
            labels: age3_5_sourcenames,
            datasets: [{
                backgroundColor: age3_5_sourceColors,
                data: age3_5_sourcestats
            }]
        },
        options: {
            title: {
                display: true,
                text: "3-5 yoshga qiziqtiradigan resurslar boyicha statistika"
            }
        }
    });


    new Chart("myChart2", {
        type: "pie",
        data: {
            labels: age6_7_sourcenames,
            datasets: [{
                backgroundColor: age6_7_sourceColors,
                data: age6_7_sourcestats
            }]
        },
        options: {
            title: {
                display: true,
                text: "6-7 yoshga qiziqtiradigan resurslar boyicha statistika"
            }
        }
    });


    new Chart("myChart3", {
        type: "pie",
        data: {
            labels: age8_12_sourcenames,
            datasets: [{
                backgroundColor: age8_12_sourceColors,
                data: age8_12_sourcestats
            }]

        },
        options: {
            title: {
                display: true,
                text: "8-12 yoshga qiziqtiradigan resurslar boyicha statistika"
            }
        }
    });

    // start from chart2
    new Chart("myChart4", {
        type: "pie",
        data: {
            labels: age3_5_booknames,
            datasets: [{
                backgroundColor: age3_5_bookColors,
                data: age3_5_bookstats
            }]
        },

        options: {
            title: {
                display: true,
                text: "3-5 yoshga qiziqtiradigan kitob turlari boyicha statistika"
            }
        }

    });

    new Chart("myChart5", {
        type: "pie",
        data: {
            labels: age6_7_booknames,
            datasets: [{
                backgroundColor: age6_7_bookColors,
                data: age6_7_bookstats
            }]
        },
        options: {
            title: {
                display: true,
                text: "6-7 yoshga qiziqtiradigan kitob turlari boyicha statistika"
            }
        }
    });

    new Chart("myChart6", {
        type: "pie",
        data: {
            labels: age8_12_booknames,
            datasets: [{
                backgroundColor: age8_12_bookColors,
                data: age8_12_bookstats
            }]
        },
        options: {
            title: {
                display: true,
                text: "8-12 yoshga qiziqtiradigan kitob turlari boyicha statistika"
            }
        }
    });


    // start from chart3




    
    


})
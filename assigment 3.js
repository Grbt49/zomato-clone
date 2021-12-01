class resutarants {
    constructor(resutarants) {
        this.resutarants = resutarants;
    }

    print = () => {
        return this.resutarants.map(item => item.name);
    }

    getStudentByname= (inputname) => {
        return this.resutarants.find(item => item.name == inputname);
    }
    getStudentBycity= (inputcity) => {
        return this.resutarants.find(item => item.city == inputcity);
    }
}
var obj1 = new  resutarants ([{
    adress: "ghnadhinagar",
    name: "fooder",
    city: "Delhi"
},
{
    adress: "ashanagar",
    name: "fiber",
    city: "mumbai"
},
{
    adress: "harinagar",
    name: "ibiza",
    city: "Delhi"
}]);
obj1.print();
obj1.getStudentByname(ibiza);
obj1.getStudentByname(delhi);


var lesson3 = document.getElementById("lesson3");
var lesson4 = document.getElementById("lesson4");

getMarkRandom = (min , max) => Math.floor(Math.random() * (max - min + 1) )*0.5 + min;

var diemthi = [
    {
        name: "A",
        mainSubject: {
            math: getMarkRandom(6 , 14),
            literature : getMarkRandom(6 , 14),
        },
        otherSubject: {
            physics: getMarkRandom(6 , 14),
            chemistry: getMarkRandom(6 , 14),
            biology: getMarkRandom(6 , 14),
        }
    },
    {
        name: "B",
        mainSubject: {
            math: getMarkRandom(6 , 14),
            literature : getMarkRandom(6 , 14),
        },
        otherSubject: {
            physics: getMarkRandom(6 , 14),
            chemistry: getMarkRandom(6 , 14),
            biology: getMarkRandom(6 , 14),
        }
    },
    {
        name: "C",
        mainSubject: {
            math: getMarkRandom(6 , 14),
            literature : getMarkRandom(6 , 14),
        },
        otherSubject: {
            physics: getMarkRandom(6 , 14),
            chemistry: getMarkRandom(6 , 14),
            biology: getMarkRandom(6 , 14),
        }
    },
    {
        name: "D",
        mainSubject: {
            math: getMarkRandom(6 , 14),
            literature : getMarkRandom(6 , 14),
        },
        otherSubject: {
            physics: getMarkRandom(6 , 14),
            chemistry: getMarkRandom(6 , 14),
            biology: getMarkRandom(6 , 14),
        }
    },
    {
        name: "E",
        mainSubject: {
            math: getMarkRandom(6 , 14),
            literature : getMarkRandom(6 , 14),
        },
        otherSubject: {
            physics: getMarkRandom(6 , 14),
            chemistry: getMarkRandom(6 , 14),
            biology: getMarkRandom(6 , 14),
        }
    }
]

function cloneObject(obj) {
    var clone = Array.isArray(obj) ? [] : {};
    for(var i in obj){
        if (typeof (obj[i]) === 'object' ) {
            clone[i] = cloneObject(obj[i]);
        }else {
            clone[i] = obj[i];
        }
    }
    return clone;
}

var diemthiCloned = cloneObject(diemthi);
// tinh diem trung binh
var text = "";
function averageMark() {
    for (var [i ,{ name: n , mainSubject : { math : math , literature : liter } , otherSubject }] of diemthiCloned.entries()) {

        var totalMarkMainSubject = ( math + liter ) * 2 ;
        var totalMarkOtherSubject = Object.values(otherSubject).reduce((t , v) => t + v);

        var avgMark = ((totalMarkMainSubject + totalMarkOtherSubject)/(4 + Object.keys(otherSubject).length)).toFixed(2);
        text += "Name " + n + "  có điểm trung bình là : " + avgMark + " <br> ";
        diemthiCloned[i].averageMark = avgMark;
    }
    return text;
}
console.log("diem thi clone");
console.log(diemthiCloned)
console.log("diem thi")
console.log(diemthi);
lesson3.innerHTML = averageMark();

lesson4.innerHTML = "";

// loc diem trung binh  >=8
function filterAvg(diemthiCloned) {
    if(diemthiCloned.averageMark >= 8) {
        return diemthiCloned;
    }
}

var filterArr = diemthiCloned.filter(filterAvg);
var txtFilter = " ";
function filterMark() {
    for(var {name : n , averageMark : a} of filterArr) {
        txtFilter += "Sinh vien " + n + " có điểm trung bình là " + a + " lớn hơn 8" + "<br>";
    }
    return txtFilter;
}
lesson4.innerHTML += filterMark();

//Sinh vien co diem trung binh lon nhat
var txtMaxAvg = "";
function maxAvg() {
    var sortFilterArr = filterArr.sort(function(a,b){
        return b.averageMark - a.averageMark;
    })
    for( var i in sortFilterArr) {
        if(sortFilterArr[i].averageMark === sortFilterArr[0].averageMark){
            txtMaxAvg +=  "Sinh vien " + sortFilterArr[i].name + " co diem trung binh cao nhat la: " + sortFilterArr[i].averageMark + "<br>";
        }
    }
    return txtMaxAvg;
}
lesson4.innerHTML += maxAvg();

//Sinh vien co diem van nho nhat
var txtMinLiter = "";
function minLiter() {
    var sortArrLiter = diemthiCloned.sort(function(a,b) {
        return a.mainSubject.literature - b.mainSubject.literature;
    })
    for( var i in sortArrLiter) {
        if(sortArrLiter[i].mainSubject.literature === sortArrLiter[0].mainSubject.literature){
            txtMinLiter +=  "Sinh vien " + sortArrLiter[i].name + " co diem van thap nhat la: " + sortArrLiter[0].mainSubject.literature + "<br>";
        }
    }
    return txtMinLiter;
}
lesson4.innerHTML += minLiter();

// Clone diemthi
// spread not deep clone
var diemthiClone1 = [...diemthi];
console.log("diemthiclone1")
console.log(diemthiClone1)
//Object.assign() not deep clone
var diemthiClone2 = Object.assign({} , diemthi);
console.log("diemthiclone2")
console.log(diemthiClone2)
//Json easy loss data
var diemthiClone3 = JSON.parse(JSON.stringify(diemthi));
console.log("diemthiclone3")
console.log(diemthiClone3)

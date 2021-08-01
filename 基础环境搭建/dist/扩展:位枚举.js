var Jurisdiction;
(function (Jurisdiction) {
    Jurisdiction[Jurisdiction["Read"] = 1] = "Read";
    Jurisdiction[Jurisdiction["Write"] = 2] = "Write";
    Jurisdiction[Jurisdiction["Query"] = 4] = "Query";
    Jurisdiction[Jurisdiction["Delete"] = 8] = "Delete";
})(Jurisdiction || (Jurisdiction = {}));
let myJurisdiction = Jurisdiction.Read | Jurisdiction.Write | Jurisdiction.Query | Jurisdiction.Delete;
console.log(myJurisdiction);
console.log((myJurisdiction & Jurisdiction.Delete) === Jurisdiction.Delete);
function queryAuthority(target, authorify) {
    return (target & authorify) === authorify;
}
console.log(queryAuthority(myJurisdiction, Jurisdiction.Delete));
function removeAuthorify(target, authorify) {
    return myJurisdiction = target ^ authorify;
}
removeAuthorify(myJurisdiction, Jurisdiction.Delete);
console.log(queryAuthority(myJurisdiction, Jurisdiction.Delete));

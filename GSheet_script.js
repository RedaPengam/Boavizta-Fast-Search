/** @OnlyCurrentDoc */
var sheet1 = "Calculs";
var sheet2 = "data";
var sheet3 = "constants";
var columnA = 1; // Type d'équipement
var columnB = 2; // Marque 1
var columnC = 3; // Marque 2
var columnD = 4; // Modèle
var columnE = 5; // Capacité de stockage
var columnF = 6; // Durée de vie annoncée
var columnG = 7; // Empreinte carbone
var columnH = 8; // Nombre d'équipements
var columnI = 9; // Empreinte carbone totale 
var columnJ = 10; // Jours de chauffage gaz
var columnK = 11; // km en tgv
var columnL = 12; // km en voiture 
var columnM = 13; // Litres d'eau en bouteille
var columnN = 14; // Repas avec boeuf
var columnO = 15; // Repas végétarien 
var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet1);
var ws_data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet2);
var ws_constants = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet3);
var listRows_data = ws_data.getRange(2, 1, ws_data.getLastRow(), ws_data.getLastColumn()).getValues();
var listRows_constants = ws_data.getRange(2, 1, ws_constants.getLastRow(), ws_constants.getLastColumn()).getValues();

// 🚦 main
function onEdit(e){
  var activeCell = e.range;
  var val = activeCell.getValue();
  var row = activeCell.getRow();
  var col = activeCell.getColumn();
  var ws_name = activeCell.getSheet().getName();
  // row 1, 2 = titres
  if(ws_name === sheet1 && row > 2 && col === columnA){
    actionsCell_typeEquipement(val, row, columnA);    
  } else if(ws_name === sheet1 && row > 2 && col === columnB){
    actionsCell_marque(val, row, columnB);
  } else if(ws_name === sheet1 && row > 2 && col === columnC){
    actionsCell_marque(val, row, columnC);
  } else if(ws_name === sheet1 && row > 2 && col === columnD){
    actionsCell_modele(val, row, columnD);
  } else if(ws_name === sheet1 && row > 2 && col === columnH){
    actionsCell_nombreEquipements(val, row, columnH);
  }
}
// ⚙ création d'une "drop down list" (data validation) dans une cellule
function applyValidationToCell(list, cell){
  var rule = SpreadsheetApp
  .newDataValidation()
  .requireValueInList(list)
  .build();
  cell.setDataValidation(rule);
}
/* 
🔽 actions lorsque la cellule "Type d'équipement" est active :
(1) lorsqu'elle est vide (après suppression de la valeur)
(2) lorsqu'elle est non vide (après sélection dans la "drop down list")
*/
function actionsCell_typeEquipement(val, row, column){
  if(val === ""){
    // suppression de la valeur des cellules de droite même ligne
    for (var i = 1; i < 20; i++) {ws.getRange(row, column + i).clearContent().clearDataValidations();}
  } else {
    // suppression de la valeur des cellules de droite même ligne (réinitialisation)
    for (var i = 1; i < 20; i++) {ws.getRange(row, column + i).clearContent().clearDataValidations();}
    /* 
    création de la "drop down list" des "Marques"
    création de la liste des lignes de la "list_data" filtrés selon :
    la valeur colonne "data!subcategory" = valeur cellule active "Type d'équipement" 
    */
    var listRows_data_filtered = listRows_data.filter(r => r[2] === val);
    /* 
    limitation google sheet : la "drop down list" ne peut afficher que 500 éléments 
    donc obligation de faire 2 listes de marques pour avoir tous les modèles de la base :
    liste marques 1 = 500 premiers éléments
    liste marques 2 = 500 derniers éléments 
    */
    var list_dropDown1 = listRows_data_filtered.map(r => r[0]).slice(0, 500);
    var list_dropDown2 = listRows_data_filtered.map(r => r[0]).slice(500, 1001);
    var cell_marque1 = ws.getRange(row, columnB);
    var cell_marque2 = ws.getRange(row, columnC);
    applyValidationToCell(list_dropDown1, cell_marque1);
    applyValidationToCell(list_dropDown2, cell_marque2);
  }
}
/* 
🔽 actions lorsque la cellule "Marque" est active :
(1) lorsqu'elle est vide (après suppression de la valeur)
(2) lorsqu'elle est non vide (après sélection dans la liste "drop down list")
*/
function actionsCell_marque(val, row, column){
  if(val === ""){
    // suppression de la valeur des cellules de droite même ligne
    for (var i = 1; i < 20; i++) {ws.getRange(row, column + i).clearContent().clearDataValidations();}
  } else {
    // suppression de la valeur des cellules de droite même ligne (réinitialisation)
    for (var i = 1; i < 20; i++) {ws.getRange(row, column + i).clearContent().clearDataValidations();}
    // création de la "drop down list" des "Modèles"
    var cell_typeEquipement = ws.getRange(row, columnA).getValue();
    /* 
    création de la liste des lignes de la "list_data" filtrés selon :
    la valeur colonne "data!subcategory" = valeur cellule en "Type d'équipement" et
    la valeur colonne "data!manufacturer" = valeur cellule active "Marque" 
    */    
    var listRows_data_filtered = listRows_data.filter(r => 
      r[2] === cell_typeEquipement && 
      r[0] === val);
    var list_dropDown = listRows_data_filtered.map(r => r[1]);
    var cell_modele = ws.getRange(row, columnD);
    applyValidationToCell(list_dropDown, cell_modele);
  }
}
// ⚙ remplissage des cellules à droite de "Nombre d'équipements"
function fill(row, val){
  // récupération/initialisation des valeurs cellules sheet active "Calculs"
  var cell_empreinteCarbone = ws.getRange(row, columnG).getValue();
  var cell_empreinteCarboneTotale = ws.getRange(row, columnI);
  var cell_joursDeChauffage = ws.getRange(row, columnJ);
  var cell_kmEnTgv = ws.getRange(row, columnK);
  var cell_kmEnVoiture = ws.getRange(row, columnL);
  var cell_litresEauEnBouteille = ws.getRange(row, columnM);
  var cell_repasAvecBoeuf = ws.getRange(row, columnN);
  var cell_repasVegetarien = ws.getRange(row, columnO);
  // récupération des valeurs cellules sheet "constants"
  var joursDeChauffage = ws_constants.getRange(2, columnA).getValue();
  var kmEnTgv = ws_constants.getRange(2, columnB).getValue();
  var kmEnVoiture = ws_constants.getRange(2, columnC).getValue();
  var litresEauEnBouteille = ws_constants.getRange(2, columnD).getValue();
  var repasAvecBoeuf = ws_constants.getRange(2, columnE).getValue();
  var repasVegetarien = ws_constants.getRange(2, columnF).getValue();
  // écriture dans les cellules sheet active "Calculs"
  var empreinteCarboneTotale = cell_empreinteCarbone * val;
  cell_empreinteCarboneTotale.setValue(empreinteCarboneTotale);
  cell_joursDeChauffage.setValue(joursDeChauffage);
  cell_kmEnTgv.setValue(empreinteCarboneTotale / kmEnTgv);
  cell_kmEnVoiture.setValue(empreinteCarboneTotale / kmEnVoiture);
  cell_litresEauEnBouteille.setValue(empreinteCarboneTotale / litresEauEnBouteille);
  cell_repasAvecBoeuf.setValue(empreinteCarboneTotale / repasAvecBoeuf);
  cell_repasVegetarien.setValue(empreinteCarboneTotale / repasVegetarien);
}
/*
📊 actions lorsque la cellule "Modèle" est active :
(1) lorsqu'elle est vide (après suppression de la valeur)
(2) lorsqu'elle est non vide (après sélection dans la liste "drop down list")
*/
function actionsCell_modele(val, row, column){
  if(val === ""){
    // suppression de la valeur des cellules de droite même ligne
    for (var i = 1; i < 20; i++) {ws.getRange(row, column + i).clearContent().clearDataValidations();}
  } else {
    // suppression de la valeur des cellules de droite même ligne (réinitialisation)
    for (var i = 1; i < 20; i++) {ws.getRange(row, column + i).clearContent().clearDataValidations();}
    // écriture dans les cellules de droite même ligne
    var cell_typeEquipement_value = ws.getRange(row, columnA).getValue();
    var cell_marque1_value = ws.getRange(row, columnB).getValue();
    var cell_marque2_value = ws.getRange(row, columnB).getValue();
    /* 
    création de la liste des lignes de la "list_data" filtrés selon :
    la valeur colonne "data!subcategory" = valeur cellule "Type d'équipement" et
    la valeur colonne "data!manufacturer" = valeur cellule "Marque" et
    la valeur colonne "data!name" = valeur cellule active "Modèle"
    */
    var listRows_data_filtered = listRows_data.filter(r => 
      r[2] === cell_typeEquipement_value && 
      (r[0] === cell_marque1_value || r[0] === cell_marque2_value) && 
      r[1] === val);
    var gwp_total	= listRows_data_filtered.map(r => r[3]);
    var lifetime = listRows_data_filtered.map(r => r[6]);
    var hard_drive = listRows_data_filtered.map(r => r[7]);
    // initialisation des valeurs cellules
    var cell_capaciteStockage = ws.getRange(row, columnE);
    var cell_dureeVieAnnoncee = ws.getRange(row, columnF);
    var cell_empreinteCarbone = ws.getRange(row, columnG);    
    var cell_nombreEquipements = ws.getRange(row, columnH);
    // écriture dans les cellules
    cell_capaciteStockage.setValue(hard_drive);
    cell_dureeVieAnnoncee.setValue(lifetime);
    cell_empreinteCarbone.setValue(gwp_total);
    // écriture dans les cellules à droite de "Nombre d'équipements" avec par défaut la valeur de 1
    cell_nombreEquipements.setValue(1);
    fill(row, 1);
  }
}
/* 
📊 actions lorsque la cellule "Nombre d'équipements" est active :
(1) lorsqu'elle est vide (après suppression de la valeur)
(2) lorsqu'elle est non vide (après écriture)
*/
function actionsCell_nombreEquipements(val, row, column){
  if(val === ""){
    // suppression de la valeur des cellules de droite même ligne
    for (var i = 1; i < 20; i++) {ws.getRange(row, column + i).clearContent().clearDataValidations();}
  } else {
    // suppression de la valeur des cellules de droite même ligne (réinitialisation)
    for (var i = 1; i < 20; i++) {ws.getRange(row, column + i).clearContent().clearDataValidations();}
    // écriture dans les cellules à droite de "Nombre d'équipements"
    fill(row, val);
  }
}

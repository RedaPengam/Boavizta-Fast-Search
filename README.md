 Voici des outils pratiques pour trouver/comparer l'empreinte carbone des équipements numériques :
 
1. **Fiche_process.txt** : Fichier texte conçu pour les collaborateurs d'une entreprise devant commander/comparer du nouveau matériel pour un projet, leur expliquant la méthode à employer pour parvenir rapidement à trouver l'empreinte carbone d'un/plusieurs équipement(s) précis.

2. **RechercheRapide.ipynb** : *Google Colaboratory Notebook* (Python) conçu pour une recherche rapide dans la base de données open source Boavizta sur l'empreinte carbone des équipements.
https://github.com/Boavizta/environmental-footprint-data/blob/main/boavizta-data-us.csv

3. **GSheet.xslx** : *Google Sheet* avec script conçu pour comparer le poids carbone de multiples équipements à la fois. Les étapes pour l'installation de l'outil sont un peu fastidieuses pour le moment mais cela fonctionne.
- Uploader la spreadsheet (.xlsx) sur son google drive, puis l'ouvrir avec *Google Sheets*.
- Dans *Google Sheets* enregistrer la spreadsheet en tant que *Google Sheet*, puis l'ouvrir avec *Google Sheets*.
- Dans l'onglet "Affichage" de *Google Sheets*, cliquer sur "Feuilles masquées" > "Afficher data".
- Aller tout en bas de la feuille "data" et ajouter 1000 lignes.
- Dans l'onglet "Extensions" de *Google Sheets*, cliquer sur "Apps Script".
- Dans *Apps Script*, supprimer tout le code de la fenêtre de code.
- Copier le contenu du fichier Gsheet_script de ce repo.
- Dans *Apps Script*, coller le contenu et sauvegarder.
- Enfin suivre les instructions dans la feuille "Tutoriel" de la *Google Sheet*.

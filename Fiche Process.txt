Fiche Process : Trouver l’Empreinte

⏳ Temps estimé : 5-10 minutes
🎯 Objectif : Obtenir une valeur de l’empreinte carbone d’un nouvel équipement numérique (à référencer, commander…) et fournir un outil de comparaison sur ce critère pour départager des modèles d’équipements concurrents.
Informations équipement (éq) : Pour le nouveau matériel à étudier, je dois simplement disposer de la marque (1) et du nom de modèle précis (2) pour trouver l’empreinte carbone de celui-ci.
Données constructeurs via code (1 équipement)
👉 Avec ce code (Google Colab Notebook codé en Python), trouvez rapidement l’empreinte carbone d’un équipement précis. Les données constructeurs y sont présentées sous la forme d’un tableau intéractif.
**lien Notebook**
Données constructeurs via Google Sheet (> 1 éq.)
👉 Avec cette Google Sheet, à copier dans son drive personnel, trouvez rapidement l’empreinte carbone de plusieurs équipements à la fois pour faire le bilan carbone d’un projet. Les données se présentent sous forme d’un tableur automatique, dans lequel il faut choisir ligne par ligne un modèle précis d’équipement et entrer sa quantité.
**lien GSheet**



Données constructeurs via sources brutes (1 éq.)
👉 Si je ne trouve pas mon modèle avec les outils précédents (peut être un problème de mise à jour au niveau de l’agrégation des données), je tente de le trouver directement via les données du constructeur en question. Connaissant la marque (1) de mon matériel, je vais donc chercher son empreinte dans cette base de liens vers les sites constructeurs :
https://github.com/Boavizta/environmental-footprint-data/blob/main/sources.md

💡 Voici des exemples de procédure pour quelques marques :

DELL - Product Carbon Footprint :
https://www.dell.com/en-us/dt/corporate/social-impact/advancing-sustainability/sustainable-products-and-services/product-carbon-footprints.htm#tab0=0
Choisir le type de matériel dans la barre menu centrale
Faire un “ctrl + F”, taper le nom de modèle précis (2) puis taper “entrée”
Faire un “ctrl + C” pour copier l’empreinte carbone moyenne présente en évidence sur le pdf technique

HP - Product Carbon Footprint :
https://h20195.www2.hp.com/v2/library.aspx?doctype=95&footer=95&filter_doctype=no&filter_country=no&cc=us&lc=en&filter_oid=no&filter_prodtype=rw&prodtype=ij&showproductcompatibility=yes&showregion=yes&showreglangcol=yes&showdescription=yes3doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-false#doctype-95&sortorder-popular&teasers-off&isRetired-false&isRHParentNode-false&titleCheck-true
Taper le nom de modèle précis (2) dans la barre de recherche
Faire un “ctrl + C” pour copier l’empreinte carbone moyenne présente en évidence sur le pdf technique

Lenovo - Product Carbon Footprint :
https://www.lenovo.com/gb/en/social_responsibility/datasheets_notebooks/?orgRef=https%253A%252F%252Fwww.google.com%252F
Faire un “ctrl + F”, taper le nom de modèle précis (2) puis taper “entrée”
Faire un “ctrl + C” pour copier l’empreinte carbone moyenne présente en évidence sur le pdf technique

Autres marques non présentes dans le liens vers les données constructeurs : 
Faire une recherche google avec les mots clés spécifiques :
“nom de modèle précis (2)” + “carbon footprint” et trouver le pdf technique précis du modèle mentionnant l’empreinte carbone moyenne du produit évaluée grâce à une méthode d’ACV (Analyse du Cycle de Vie) bien spécifiée (voir un exemple de fiche technique des références précédentes)


Dernier recours
Dans le cas où je ne trouve pas l’empreinte carbone de mon matériel via les méthodes précédentes, il s’agit sûrement d’un manque de données de la part du constructeur. Effectivement, il n’existe pas de législation assez forte aujourd’hui s’appliquant à l’international, sur le sujet de renseignement de l’empreinte carbone des équipements numériques.

👉 Ainsi, il convient de contacter directement le fournisseur/constructeur de matériel pour lui demander de faire l’étude sur l’équipement particulier souhaité, afin d’obtenir son empreinte carbone. Par cette action, ils pourront prendre conscience que cette donnée est primordiale et doit être disponible pour tous leurs produits.

⚠ Il n’est pas forcément possible de faire cette étude en interne à leur place, comme elle fait intervenir des méthodes d’analyse du cycle de vie (ACV) chronophages et particulièrement rigoureuses (suivant des normes ISO).

💡 Pour formuler la demande d’empreinte carbone du matériel, il faut spécifier que l’empreinte du matériel doit être absolument calculée selon un méthode d’ACV reconnue. On peut donner l’exemple de la méthode d’ACV du MIT "PAIA 2014" utilisée par HP, Dell, Lenovo, AMD, Cisco : http://msl.mit.edu/projects/paia/main.html

👉 En attendant les résultats de l’étude du constructeur, nous pouvons utiliser les valeurs moyennes de l’ADEME à titre indicatif. 

🔎 D'un point de vue général français, l'ADEME fournit l'empreinte CO2 MOYENNE pour différents types d'équipements numériques (pc, smartphones, écrans) (1), calculée selon la méthode d'analyse du cycle de vie "ILCD 2011" (2).
https://bilans-ges.ademe.fr/documentation/UPLOAD_DOC_FR/index.htm?ordinateurs_et_equuipements_pe.htm
https://www.google.com/search?q=ILCD+2011&sourceid=chrome&ie=UTF-8
⚠ Cependant, il faut être conscient que ces valeurs sont des moyennes par type d’équipement assez faibles, comparées aux valeurs des constructeurs calculées par modèle spécifique, a priori plus proche de la réalité.

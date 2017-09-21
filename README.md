
ENGLISH:

A basic Firefox add-on to calculate file transfer time. it also give you transfer capacity per day/week

This addon creates a toogle button in Firefox, when user clicks it, he have to fill a form with two input fields: "Data to transfer (GB)" and "Bandwidth (Mb/s)".
Once the form submitted the addon calculates :

- time to transfer Data according to informations given by the user.
- daily transfer capacity according to bandwidth given by the user.
- weekly transfer capacity according to bandwidth given by the user.

You can define a bandwidth limitation (in percents or in Mb/s, during X hours/day, during X days/week).
In this case, you will have transfer capacities according to this limitation.

FRANCAIS:

Un simple module Firefox pour calculer les temps de transfert de fichiers. Il vous donne aussi les capacités de transfert quotidiennes et hebdomadaires.

Ce Module crée un bouton dans Firefox, lorsque l'utilisateur clique, il doit remplir un formulaire avec deux champs: "Données à transfèrer (GO)" et "Bande Passante (Mb/s)".
Une fois le formulaire validé, le module calcule:

- le temps pour transfèrer les données en fonction des informations données par l'utilisateur.
- la capacité quotidienne de transfert selon la bande passante donnée par l'utilisateur.
- la capacité hebdomadaire de transfert selon la bande passante donnée par l'utilisateur.

Vous pouvez également indiquer une limitation de bande passante (en pourcents ou en Mb/s, pendant X heures/jour pendant X jours/semaine).
Dans ce cas vous aurez également les capacités de transfert en tenant compte de cette limitation.

XPI CREATION:

IMPORTANT NOTICE: starting from Firefox 53, only extensions developed using WebExtensions APIs will be supported on Firefox (this version is obsolete)

Install SDK
get latest jetpack sdk : https://ftp.mozilla.org/pub/labs/jetpack/
Extract tarball or zip file
cd to SDK dir
run : source bin/activate
cd to addon dir
run : cfx xpi

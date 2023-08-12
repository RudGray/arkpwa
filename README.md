# Sprints

## SPRINT 1
- [ ] Créer une branche GIT de dev
- [ ] Faire un test local dans un conteneur
- [ ] Déployer

## SPRINT 2
- [ ] Ajouter une confirmation d'inscription par email
- [ ] Ajouter un lien de confirmation d'email
- [ ] Ajouter une page bloquante de confirmation d'email
- [ ] Ajouter un formulaire pwd perdu

## SPRINT 3
- [ ] Détailler une page compte d'utilisateur
- [ ] Changer de mot de passe
- [ ] Supprimer le compte

## SPRINT 4
- [ ] Générer une pwa // avec la création d'une app react il est possible de générer automatiquement une PWA
- [ ] Mettre à jour la pwa automatiquement

## SPRINT 5
- [ ] Adapter l'architecture pour travailler en MonoPage + popup compatible clavier et photo

## SPRINT 6 
- [ ] Créer une base de données de développement


Code en html, css grid, js
Commençons par la page d'acceuil, que j'appel index.html.
Cette page doit être responsive.
Le body de la page doit s'étendre sur toute la hauteur de l'écran, quel que soit l'appareil, mais l'utilisateur ne doit pas avoir à scroller.

Il doit y avoir un header de 60px de haut, contenant au centre le nom du la marque, "arkpwa" et à droite un bouton connexion.
Il doit y avoir un footer de 180px de haut, 4 colonnes de sous-titres, à termes clickable, pour faire apparaitre du contenu dans le main. Les 4 colonnes du footer auront chacune une thématique (légal, about, ...) je te laisse choisir les 2 dernières.
Le corps central, entre le header et le footer, accueil un menu à gauche de 300px de large s'étendant sur toute la hauteur, contenant 5 sous-titres (plus gros que ceux du footer) [ stratégie d'acquisition digital, prototypage d'application minute, transformation digitale complète, formation conduite de projet, Stratégie Marketing digital]
Enfin le corps central, recevra un main qui s'étendra en largeur et en hauteur sur l'espace restant. Le main présentera une page pour chaque sujet à présenter, lorsque l'utilisateur cliquera sur un sous-titre. Pour chacun d'eux, tu créera une présentation lorem ipsum. Par défaut le main présentera un sujet que l'utilisateur pour revoir à chaque fois qu'il cliquera sur la marque du site.

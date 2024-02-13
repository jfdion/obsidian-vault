# Questions

À partir du domaine suivant, créez les URLs permettant de manipuler les ressources

Application de gestion d'une **guilde de joueurs**. 

Concepts **Guilde**, **Joueurs** 

Une guilde doit avoir un **nom** et un **fondateur**. Une guilde ne peut pas être renommée après sa création. Une guilde peut être **supprimée** par le fondateur. Il est possible d'**ajouter** et de **retirer** des joueurs à la guilde.

Assurez vous d'inclure le bon verbe HTTP, l'URL ()

Création de la guilde : POST /guildes : 201
Suppression de la guilde: DELETE /guildes/{guilde_id} : 204

Ajout d'un joueur: POST /guildes/{guilde_id}/ajouter-joueur: 200
Retitrait d'un joueur: DELETE /guildes/{guild_id/retirer_joueur: 204
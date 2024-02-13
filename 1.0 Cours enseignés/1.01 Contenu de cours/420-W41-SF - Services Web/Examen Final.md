# Questions

À partir du domaine suivant, créez les URLs permettant de manipuler les ressources

Application de gestion d'une **guilde de joueurs**. 

Concepts **Guilde**, **Joueurs** 

Une guilde doit avoir un **nom** et un **fondateur**. Une guilde ne peut pas être renommée après sa création. Une guilde peut être **supprimée** par le fondateur. Il est possible d'**ajouter** et de **retirer** des joueurs à la guilde. Il est possible de **promouvoir** ou de **rétrograder** un joueur d'une guilde. Un joueur peut faire parti d'une seule guilde à la fois.

Assurez vous d'inclure le bon verbe HTTP, l'URL (en respectant la nomenclature recommandée pour les URLs) et le code HTTP de retour en cas de succès de l'opération. Si vous devez utiliser un id dans vos URLs, nommez les `{ressource_id}`

ex: `VERBE_HTTP /url-relatif/de-la-ressource : code_http`

Création de la guilde : `POST /guildes : 201`
Suppression de la guilde: `DELETE /guildes/{guilde_id} : 204`

Ajout d'un joueur: `POST /guildes/{guilde_id}/ajouter-joueur: 200`
Retrait d'un joueur: `DELETE /guildes/{guild_id/retirer_joueur: 204`

Promotion d'un joueur `PUT /joueurs/{joueur_id}/promouvoir: 200`
Retrogradation d'un joueur `PUT /joueurs/{joueur_id} /retrogradation: 200`
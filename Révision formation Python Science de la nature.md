
# Chaines de caractères
## Déclaration
https://csfboileau.gitlab.io/sites/python/docs/base/program/string#d%C3%A9claration

de
> On utilise les guillemets (ou les doubles guillemets) pour déclarer une chaîne de caractères.

vers
> On utilise les guillemets (") ou les apostrophes, aussi appelés guillemets simples (') pour déclarer une chaîne de caractères.

Peut-être présenter un exemple avec les `"`

```python
#Déclaration de chaînes de caractères

x = "une chaîne de caractères" # guillemets / guillemets doubles
y = '1, 2, 3, 4' # apostrophe / guillement simle
z = 'True'

# Déclaration d'une chaîne de caractères sur plusieurs lignes
a = ''' roses are red
        violet are blue
        Unexpected {
        at line 132 '''
```

# Fonctions
## Appel de fonction
https://csfboileau.gitlab.io/sites/python/docs/base/program/funct#utilisation-dune-fonction-appel

Présenter le même code que pour l'exemple sans fonction

```python
# Calcul de la masse volumique

def masse_volumique(masse, volume):  
    return masse / volume

mass1 = 2500
volume1 = 50

mv1 = masse_volumique(mass1, volume1)

print(mv1)

mass2 = 600
volume2 = 120

mv2 = masse_volumique(mass2, volume2)

print(mv2)
```

## Variantes
https://csfboileau.gitlab.io/sites/python/docs/base/program/funct#variantes
de
> Une fonction doit avoir au minimum le mot-clé `def` et nom. La valeur de retour et les paramètres sont facultatifs.

vers
> Une fonction doit avoir au minimum le mot-clé `def` et un nom. La valeur de retour (`return`) et les paramètres sont facultatifs (`param1`).

# Tests
## Tester une fonction 
https://csfboileau.gitlab.io/sites/python/docs/base/program/test#tester-une-fonction-librarie
de 
> Il existe aussi des librairies pour faire des tests unitaires. Cela demande un plus grand formalisme, mais les résultats sont extrèmement clairs!

vers
> Il existe aussi des librairies pour faire des tests unitaires. Cela demande un plus grand formalisme, mais les résultats sont extrêmement clairs!

# Lecture des inputs
## Lecture des inputs
de 
>Pour lire un fichier, il faut utiliser une fonction spécifique pour ouvrir le fichier et charger les valeurs à traiter en mémoire. L'emplacement de ce fichier est important, car l'ouverture nécessite le chemin d'accès du fichier (son endroit sur l'ordinateur).

vers
> Pour lire un fichier, il faut utiliser une fonction spécifique pour ouvrir le fichier et charger les valeurs à traiter en mémoire. L'emplacement de ce fichier est important, car l'ouverture nécessite le chemin d'accès du fichier (son endroit sur l'ordinateur).
>
> Il est également important de fermer un fichier après avoir fait la lecture. Python nous offre des facilités pour éviter ce oubli qui pourrait nous poser problème lors de l'exécution de notre programme.

## Exemple de lecture
https://csfboileau.gitlab.io/sites/python/docs/base/program/input#exemple-de-lecture
de
> 1. Le mot-clé `with` permet d'utiliser une ressource externe au programme (un fichier, une base de donnée, etc.)

vers
> 1. Le mot-clé `with` permet d'utiliser une ressource externe au programme (un fichier, une base de donnée, etc.). Cette instruction s'assure également que le fichier ouvert pour la lecture sera refermé afin de le libérer.

# Opérateurs
## 


# Elif
https://csfboileau.gitlab.io/sites/python/docs/base/condition#elif

de
> Le mot-clé `else` est utilisé pour introduire plusieurs alternative au `if` et `else` dans un programme.

vers
> Le mot-clé `elif` est utilisé pour introduire plusieurs alternative au `if` et `else` dans un programme.
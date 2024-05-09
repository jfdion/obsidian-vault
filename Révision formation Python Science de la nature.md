
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
## Opérateurs de comparaisons (ou booléens)
https://csfboileau.gitlab.io/sites/python/docs/base/operators#op%C3%A9rateurs-de-comparaisons-ou-bool%C3%A9ens

Il manque le `is` dans le tableau. Permet d'optimiser les appels lors que l'on vérifie avec `True`, `False` et `None`.
# Conditions
## Elif
https://csfboileau.gitlab.io/sites/python/docs/base/condition#elif

de
> Le mot-clé `else` est utilisé pour introduire plusieurs alternative au `if` et `else` dans un programme.

vers
> Le mot-clé `elif` est utilisé pour introduire plusieurs alternative au `if` et `else` dans un programme.

# Boucles
## Opérateurs de comparaisons (ou booléens)
https://csfboileau.gitlab.io/sites/python/docs/base/loop#boucle-while

Présenter le cas de base d'une boucle infinie

```python
while True:
	# boucle sans fin
```

## Interruption d'une boucle (nouveau contenu)
Il est possible d'interrompre l'exécution d'une boucle de 2 façons

Si l'exécution du code arrive sur une instruction de bris  `break` la boucle s'arrête et on passe à l'instruction suivante

```python
# Cette boucle comptera jusqu'à 5 puis affichera le message "Compteur à 5"
compteur = 1
while True:
    compteur += 1
    if compteur == 5:
        print("Compteur à 5")
        break
```

Si l'exécution du code arrive sur une instruction de retour `continue` l'itération courante est interrompue et on passe à l'itération suivante

```python
# Cette boucle comptera jusqu'a l'infini en affichant uniquement les nombres pair
# 2 est un nombre pair
# 4 est un nombre pair
# ...

compteur = 1
while True:
    compteur += 1
    if compteur % 2 == 1:
        continue
    print(compteur, " est un nombre pair")
```

# Introduction (Collections)
## Résumé
https://csfboileau.gitlab.io/sites/python/docs/collections/intro#r%C3%A9sum%C3%A9

Changement du libellé *Changeable* pour *Mutable* comme tu fais dans les pages de notes plus loin

Mise en gras des élément différents

| Collection   | Déclaration | Ordonnée         | Mutable | Duplicats                 |
| ------------ | ----------- | ---------------- | ------- | ------------------------- |
| Liste        | x = []      | Oui              | Oui     | Oui                       |
| Ensemble     | x = set()   | **Non**          | Oui     | **Non**                   |
| Tuple        | x = ()      | Oui              | **Non** | Oui                       |
| Dictionnaire | x = {}      | Oui (Python 3.7) | Oui     | Non (clés), Oui (valeurs) |

# Ensemble
## Déclaration
https://csfboileau.gitlab.io/sites/python/docs/collections/set#d%C3%A9claration

de
```python
# Ensemble vide
set = set()

# Liste avec des valeurs
set = {'patate', 'frite', 'purée', 'Montecarlo'}
```

vers
```python
# Ensemble vide
set = set()

# Ensemble avec des valeurs
set = {'patate', 'frite', 'purée', 'Montecarlo', 'patate'}
# {'patate', 'frite', 'purée', 'Montecarlo'} - le 2e patate est retiré de l'ensemble
```

# Tuple
## Manipulations
de
```python
# Liste avec des valeurs
tuple = ('patate', 'frite', 'purée', 'Montecarlo')

# Obtenir l'élément en position 1:
value = tuple[1]

# Obtenir l'élément en dernière position:
value = tuple[-1]

# Obtenir un intervalle
valeur = tuple[2:5]
```
vers
```python
# Tuple avec des valeurs
tuple = ('patate', 'frite', 'purée', 'Montecarlo')

# Obtenir l'élément en position 1:
value = tuple[1]

# Obtenir l'élément en dernière position:
value = tuple[-1]

# Obtenir un intervalle
valeur = tuple[2:5]
```

De
>À noter, les [] sont utilisés pour l'accès, même si le tuple est déclaré avec des ()

Vers
À noter, les `[]` sont utilisés pour l'accès, même si le tuple est déclaré avec des `()`

# Itertools
## Produit cartésian

```python
import itertools

digits = [1,2,3,4,5]
iterator = itertools.product(digits, repeat=3)
codes = [p for p in iterator]

print(iterator) # affiche l'itérateur
print(codes) # affiche toutes les combinaisons du produit cartésian

>>> 
# l'itérateur retourné par le premier 'print()'
<itertools.product object at 0x000001C78D9D75C0>
# le résultat du produit cartésian, stocké dans la variable 'codes'
[(1, 1, 1), (1, 1, 2), (1, 1, 3), (1, 2, 1), (1, 2, 2), (1, 2, 3), (1, 3, 1), (1, 3, 2), (1, 3, 3), 
 (2, 1, 1), (2, 1, 2), (2, 1, 3), (2, 2, 1), (2, 2, 2), (2, 2, 3), (2, 3, 1), (2, 3, 2), (2, 3, 3), 
 (3, 1, 1), (3, 1, 2), (3, 1, 3), (3, 2, 1), (3, 2, 2), (3, 2, 3), (3, 3, 1), (3, 3, 2), (3, 3, 3)]
```

Il manque les valeurs 4 et 5 dans le résultat afficher
```python
[
 (1, 1, 1), (1, 1, 2), (1, 1, 3), (1, 1, 4), (1, 1, 5), (1, 2, 1), (1, 2, 2), (1, 2, 3), (1, 2, 4), (1, 2, 5), (1, 3, 1), (1, 3, 2), (1, 3, 3), (1, 3, 4), (1, 3, 5), (1, 4, 1), (1, 4, 2), (1, 4, 3), (1, 4, 4), (1, 4, 5), (1, 5, 1), (1, 5, 2), (1, 5, 3), (1, 5, 4), (1, 5, 5),
 # ...100 autres résultats
]
```

## Permutations
```python
import itertools

digits = [1,2,3,4,5]
iterator = itertools.permutations(digits, 3)
codes = [p for p in iterator]

print(iterator) # affiche l'itérateur
print(codes) # affiche toutes les permutations

>>> 
# l'itérateur retourné par le premier 'print()'
<itertools.permutations object at 0x000001C78DA2B220>
# le résultat des permutations, stocké dans la variable 'codes'
[(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)]
```

IDEM
```python
[(1, 2, 3), (1, 2, 4), (1, 2, 5), (1, 3, 2), (1, 3, 4), (1, 3, 5), (1, 4, 2), (1, 4, 3), (1, 4, 5), (1, 5, 2), (1, 5, 3), (1, 5, 4), (2, 1, 3), (2, 1, 4), (2, 1, 5), (2, 3, 1), (2, 3, 4), (2, 3, 5), (2, 4, 1), (2, 4, 3), (2, 4, 5), (2, 5, 1), (2, 5, 3), (2, 5, 4), (3, 1, 2),
 # ...35 autres résultats
]
```

## Combinaisons
Utilisation de la fonction `permutations`

```python
import itertools

digits = [1,2,3,4,5]
iterator = itertools.combinations(digits, 3)
codes = [p for p in iterator]

print(iterator) # affiche l'itérateur
print(codes) # affiche toutes les permutations

>>> 
# l'itérateur retourné par le premier 'print()'
<itertools.combinations object at 0x000001C78F52AB30>
[(1, 2, 3), (1, 2, 4), (1, 2, 5), (1, 3, 4), (1, 3, 5), (1, 4, 5), (2, 3, 4), (2, 3, 5), (2, 4, 5), (3, 4, 5)]
```

## Installation
de
> `itertools` est déjà installée avec la distribution Anaconda :snake:

vers
> `itertools` fait parti de la librairie de base de Python :snake:

# Networkx
## Pour en savoir plus

La documentation de la librairie `itertools` est disponible [ici](https://networkx.org/documentation/stable/tutorial.html).

[  
](https://csfboileau.gitlab.io/sites/python/docs/libs/itertools)
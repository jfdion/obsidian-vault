---
tags:
  - code
  - snippet
  - "#sql"
language: SQL
created: 2024-01-29 Mon
last_updated: 2024-01-29 Mon
---
**Description**
{description}

```SQL
CREATE TEMPORARY TABLE IF NOT EXISTS cours_versions_recentes
   (INDEX {idx} (fields), ...)
    ENGINE=MyISAM
    SELECT * FROM

        (

            SELECT

                CONCAT(sub_mcc.sigle_matiere, "-", sub_mcc.numero_cours) as sigle_matiere_cours,

                sub_mcc.uid as id,

                sub_mcc.sigle_matiere,

                sub_mcc.numero_cours,

                sub_mcc.titre,

                sub_mcc.description,

                FROM_UNIXTIME(sub_mcc.date_debut_version_cours, "%Y-%m-%d")  as date_debut_version_cours

            FROM tx_tacticmodelecorporatif_domain_model_cours sub_mcc

            WHERE sub_mcc.date_debut_version_cours <= UNIX_TIMESTAMP()

            ORDER BY sub_mcc.date_debut_version_cours DESC, sigle_matiere ASC, numero_cours ASC

        ) as mc

    GROUP BY mc.sigle_matiere, mc.numero_cours;
```

**References**
{reference}
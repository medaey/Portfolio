[TOC]


⏩ Tu n'a pas le temps ? Fait un copier-coller du texte ci-dessous :smile:

**Debian 11**

```bash
sudo bash -c "echo 'net.ipv6.conf.all.disable_ipv6 = 1' >> /etc/sysctl.conf" && sudo sysctl -p && ip a
```
---
# I Présentation

ipv6 est le successeur du protocole ipv4, celui-ci dispose d'un espace d'adressage bien plus important, afin de répondre à la forte demande d'adresse suite la démocratisation d'internet.

**Pourquoi désactiver cet adressage ?**
Pour une question de simplicité, car quand une adresse ipv4 ressemble à ceci `192.168.1.24/24` une adresse ipv6 ressemble à `2a01:cb08:918:5000:a00:27ff:fe6d:de9d/64`. Une est plus rapide à saisir, je vous l'aisse deviner laquelle.

# II Désactiver l'adressage ip version 6

Pour désactiver ce protocole sous debian 11 je vais modifier le fichier `/etc/sysctl.conf` et y rajouter la ligne

```bash
net.ipv6.conf.all.disable_ipv6 = 1
```

ℹ️ Il est possible de désactiver l'ipv6 sur une seule interface par exemple uniquement pour `enp0s3`

```bash
net.ipv6.conf.enp0s3.disable_ipv6 = 1
```

Enfin il suffira d'appliquer les modifications

```bash
sudo sysctl -p
```

Pour s'assurer que la modification est bien effective rien de mieux qu'une vérification à l'œil en affichent les adresses avec la commande `ip a`.

📝https://www.memoinfo.fr/tutoriels-linux/desactiver-ipv6-sur-debian/
📝https://www.itzgeek.com/how-tos/linux/debian/how-to-disable-ipv6-on-debian-9-ubuntu-16-04.html
📝https://fr.wikipedia.org/wiki/IPv6
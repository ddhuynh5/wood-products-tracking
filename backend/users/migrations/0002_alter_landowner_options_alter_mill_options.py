# Generated by Django 4.1.5 on 2023-07-06 04:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='landowner',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='mill',
            options={'managed': False},
        ),
    ]
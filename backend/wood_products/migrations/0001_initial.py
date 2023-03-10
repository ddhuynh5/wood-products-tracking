# Generated by Django 4.1.5 on 2023-02-01 02:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="WoodProduct",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("year", models.IntegerField()),
                ("name", models.CharField(max_length=50, verbose_name="Name")),
                (
                    "tree_type",
                    models.CharField(max_length=50, verbose_name="Tree Type"),
                ),
                ("tons", models.FloatField()),
            ],
        ),
    ]

# Generated by Django 4.0.5 on 2022-06-30 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Torob', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='shops',
            field=models.ManyToManyField(to='Torob.shop'),
        ),
    ]

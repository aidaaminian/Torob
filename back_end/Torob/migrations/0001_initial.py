# Generated by Django 4.0.5 on 2022-07-01 17:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('product_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=120, null=True)),
                ('img_src', models.URLField(blank=True, null=True)),
                ('min_price', models.PositiveIntegerField(blank=True, null=True)),
                ('max_price', models.PositiveIntegerField(blank=True, null=True)),
                ('head', models.CharField(blank=True, max_length=50, null=True)),
                ('category', models.CharField(blank=True, max_length=50, null=True)),
                ('sub_category', models.CharField(blank=True, max_length=50, null=True)),
                ('internal_storage', models.IntegerField(blank=True, null=True)),
                ('weight', models.IntegerField(blank=True, null=True)),
                ('warranty', models.IntegerField(blank=True, null=True)),
                ('color', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('shop_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=120, null=True)),
                ('link', models.URLField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ShoppingDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.PositiveIntegerField(blank=True, null=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Torob.product')),
                ('shop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Torob.shop')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='shops',
            field=models.ManyToManyField(through='Torob.ShoppingDetail', to='Torob.shop'),
        ),
        migrations.CreateModel(
            name='Complaint',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(choices=[('a', 'NotRelated'), ('b', 'IncorrectData'), ('c', 'FollowUp')], default='c', max_length=2)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Torob.product')),
                ('shop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Torob.shop')),
            ],
        ),
    ]

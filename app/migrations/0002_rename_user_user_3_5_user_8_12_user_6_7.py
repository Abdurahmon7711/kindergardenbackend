# Generated by Django 4.0.5 on 2022-06-21 12:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='User_3_5',
        ),
        migrations.CreateModel(
            name='User_8_12',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('surname', models.CharField(max_length=50)),
                ('age', models.IntegerField()),
                ('favourite_work', models.TextField()),
                ('favourite_asar', models.TextField()),
                ('favourite_asar_personaj_like', models.TextField()),
                ('book', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.book')),
                ('using_source', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.source')),
            ],
        ),
        migrations.CreateModel(
            name='User_6_7',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('surname', models.CharField(max_length=50)),
                ('age', models.IntegerField()),
                ('free_time_work', models.TextField()),
                ('favourite_asar', models.TextField()),
                ('favourite_asar2222', models.TextField()),
                ('book', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.book')),
                ('using_source', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.source')),
            ],
        ),
    ]

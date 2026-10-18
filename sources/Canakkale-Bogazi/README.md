# Çanakkale Boğazı Yüzme Yarışı 2013–2023 (staging CSV)

Staging rows for the build pipeline; not read by the site. Columns:
brand,year,stage,date,distance_m,suit,sex,name,club,age_group,birth_year,age,time_s,status,source_files

| Year | M | F | Source |
|---|---|---|---|
| 2013 | 338 | 122 | canakkalerotaryclub.org/arsiv/yuzme/geneltasnif.pdf (Wayback 20150803175625) |
| 2014 | 210 | 56 | canakkalerotaryclub.org/sonuclar/genel.pdf (Wayback 20140912022233) |
| 2015 | 377 | 137 | canakkalerotaryclub.org/?page_id=1592 (Wayback) |
| 2016 | 327 | 71 | canakkalerotaryclub.org/?page_id=2369 (Wayback) |
| 2017 | 366 | 65 | canakkalerotaryclub.org/?page_id=3474 (Wayback 20170911) |
| 2018 | 566 | 129 | canakkalerotaryclub.com/2018-yarisma-sonuclari/ (Wayback 20201126044729) |
| 2019 | 465 | 137 | canakkalerotaryclub.com/2019-yarisma-sonuclari/ (Wayback 20200116125743) |
| 2021 | 547 | 135 | canakkalerotaryclub.com/2021-yuzme-yarismasi/ (Wayback 20220925231916) |
| 2023 | 585 | 0 | canakkaleyuzmeyarisi.com/uploads/2023/canakkalegenelklasmanerkekresmi2.pdf (men only) |

No race in 2020; 2022 results (splittime.nl EventID=556) were purged and not archived.

Notes:
- Para categories (ENGELLİ / ÖZEL SPORCU) and DNS rows are excluded.
- time_s is the net time ("SONUÇ") where gross and net are both given; 2013 and 2023 keep hundredths.
- 2018: 162 entrants are listed with no time and no status; time_s and status are blank.
- club is filled only for 2013–2014; later "Affiliation" columns are countries.
- date assumes 30 August (Zafer Bayramı) every year; distance_m is 4500 although sources say "3.5 mil".
- 2023 names are printed SURNAME GIVEN; the first word was moved to the end.
- Raw files are kept on the XPS PC under OneDrive\Desktop\GNC\yuzme-alt\Canakkale-Bogazi\<year>\.

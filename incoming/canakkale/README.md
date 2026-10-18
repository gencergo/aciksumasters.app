# Çanakkale Boğazı Yüzme Yarışı 2013–2021 (incoming)

`canakkale_bogazi_2013_2021.csv` — 4,048 rows, UTF-8. Columns:
brand,year,stage,date,distance_m,suit,sex,name,club,age_group,birth_year,age,time_s,status,source_files

`source_files` paths are relative to this folder; the raw files are in `<year>/`.

| Year | M | F | Raw file used | Original URL (via Wayback) |
|---|---|---|---|---|
| 2013 | 338 | 122 | 2013/geneltasnif.pdf | canakkalerotaryclub.org/arsiv/yuzme/geneltasnif.pdf (20150803175625) |
| 2014 | 210 | 56 | 2014/genel.pdf | canakkalerotaryclub.org/sonuclar/genel.pdf (20140912022233) |
| 2015 | 377 | 137 | 2015/page_id_1592.html | canakkalerotaryclub.org/?page_id=1592 |
| 2016 | 327 | 71 | 2016/page_id_2369.html | canakkalerotaryclub.org/?page_id=2369 |
| 2017 | 366 | 65 | 2017/page_id_3474.html | canakkalerotaryclub.org/?page_id=3474 (20170911095950) |
| 2018 | 566 | 129 | 2018/2018-yarisma-sonuclari.html | canakkalerotaryclub.com/2018-yarisma-sonuclari/ (20201126044729) |
| 2019 | 465 | 137 | 2019/2019-yarisma-sonuclari.html | canakkalerotaryclub.com/2019-yarisma-sonuclari/ (20200116125743) |
| 2021 | 547 | 135 | 2021/2021-yuzme-yarismasi.html | canakkalerotaryclub.com/2021-yuzme-yarismasi/ (20220925231916) |

Other files in the year folders are the same results split by sex / age group / para, kept for cross-checking.
No race in 2020. 2022 results (splittime.nl EventID=556) were purged and not archived. 2023 (men only) is left out.

Notes:
- Para categories (ENGELLİ / ÖZEL SPORCU) and DNS rows are excluded.
- time_s is the net time ("SONUÇ") where gross and net are both given; 2013 keeps hundredths.
- 2013: 146 DNF. 2018: 3 DQ, plus 162 entrants listed with no time and no status (time_s and status blank). 2021: 51 DNF, 29 DQ.
- club is filled only for 2013–2014; later "Affiliation" columns are countries.
- date assumes 30 August (Zafer Bayramı) every year; distance_m is 4500 although sources say "3.5 mil" (2013: "6482m").
- Age bands: 2013–2015 use 14-18, 19-24, 25-30, 31-35 … 71+; 2016+ use 25-29, 30-34 … 70+.

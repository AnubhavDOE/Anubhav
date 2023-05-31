import os
import requests
from bs4 import BeautifulSoup
main_url = r'https://papers.gceguide.com/A%20Levels/'
sbjcd = input("SUBJECT CODE : ")
ppr = input("paper : ")
# howMany = int(input("how many papers (latest) : "))
path = f'/Users/anubhavdhungana/Desktop/PDFs/{sbjcd}_{ppr}'

try: 
    os.makedirs(path)
except FileExistsError:
    print("folder already exists ")


def subject_link(subject_code):
    html_text = (requests.get(main_url)).text
    soup = BeautifulSoup(html_text, 'lxml')
    el = soup.find_all(class_="name",href = True)
    for subjects in el:
        subjoot = str(subjects)
        subject_list = subjoot.split('"')
        linkHolder = subject_list[3]
        linkMaker = linkHolder.replace(" ", "%20")
        Act_Link = f'{main_url}{linkMaker}'
        if subject_code in Act_Link:
            worker = Act_Link
            print(worker)
            quit()
            return worker

def eller(url):
    html_text = requests.get(url).text
    soup = BeautifulSoup(html_text, 'lxml')
    el = soup.find_all(class_="name",href = True)
    return el

dated_links= []

def dated_returner(subject_code):
    url = subject_link(subject_code)
    el = eller(url)
    for blocks in el:
        if len(str(blocks)) < 37:
            bruh = str(blocks)
            bruh2 =  list(bruh)
            actual_date_list= (bruh2[28:32])
            actual_date = "".join(str(date) for date in actual_date_list)
            x = f'{url}/{str(actual_date)}'
            dated_links.append(x)
    return dated_links

elsr =[]
final_link = []

def final(subject_code,paper):
    url_list = dated_returner(subject_code)
    for urls in url_list:
        el = eller(urls)
        #print(el)
        for year in el:
            for papers in year:
                if not "_ms_" in papers and not "_in_" in papers and not "_gt_" in papers and not "_er_" in papers and f"_{paper}" in papers:
                    elsr.append(papers)
                    final_link.append(f"{urls}/{papers}")
    return final_link
  

final_link = final(sbjcd,ppr)



def downloader(url, file_name):
        with open (file_name, 'wb') as pdf:
            r = requests.get(url)
            pdf.write(r.content)
            print('downloaded')          



for i in range(0,len(final_link)):
    url = final_link[i]
    print(url)
    file_name = elsr[i]
    print(file_name)
    downloader(url, f'{path}/{file_name}')
    


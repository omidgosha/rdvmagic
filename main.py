from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By


# Configure Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run Chrome in headless mode (no GUI)

# Create a new instance of the Chrome driver
driver = webdriver.Chrome(options=chrome_options)

# Open the webpage
driver.get("https://pprdv.interieur.gouv.fr/booking/create/989")  # Replace with your webpage URL

try:
    banner = driver.find_element(By.ID, "cookies-banner")
    banner_html = banner.get_attribute("outerHTML")
    print(banner_html)  # Print the HTML content of the banner
    # Find the "Accepter" button and click it
    accept_button = driver.find_element(By.XPATH, "//div[@id='cookies-banner']//a[contains(text(), 'Accepter')]")
    accept_button.click()
    print("Clicked on the 'Accepter' button.")
except NoSuchElementException:
    print("No cookie consent banner found.")

try:
    checkbox = driver.find_element(By.ID, "condition")
    checkbox.click()
    print("Checkbox is checked.")
except NoSuchElementException:
    print("Checkbox element not found.")

try:
    button = driver.find_element(By.XPATH, "//input[@type='submit' and @class='Bbutton' and @name='nextButton' and @value='Effectuer une demande de rendez-vous']")
    button.click()
    print("Clicked on the button.")
except NoSuchElementException:
    print("Button element not found.")

try:
    radio_button = driver.find_element(By.ID, "planning1075")
    radio_button.click()
    print("Clicked on the radio button.")
except NoSuchElementException:
    raise Exception("Radio button element not found.")

try:
    next_button = driver.find_element(By.XPATH, "//input[@type='submit' and @class='Bbutton' and @value='Etape suivante' and @name='nextButton']")
    next_button.click()
    print("Clicked on the next button.")
except NoSuchElementException:
    print("Next button element not found.")

page_content = driver.page_source

if "Il n'existe plus de plage horaire libre" in page_content:
    print("The text 'Il n'existe plus de plage horaire libre' is present on the page.")
else:
    print("The text 'Il n'existe plus de plage horaire libre' is not present on the page.")

driver.quit()

# 🚀 Integrating With HubSpot I: Foundations Practicum — **Zeiad Ramadan**

This project was built for the **Integrating With HubSpot I: Foundations Practicum** as part of the **HubSpot Academy Developer Certification**.  
It demonstrates how to build a simple **Node.js integration** with the HubSpot CRM API using **Contacts** and custom properties to store pet information.

---

## 🐾 Pet Management via HubSpot Contacts

The project treats each pet as a **Contact** in HubSpot, using custom properties.  
The following **Single-line text** properties are used:

- **Name Pet**  
- **Pet Age**  
- **Pet Gender**  
- **Pet Type**

The app allows you to **create**, **view**, and **list** these pet records through a simple Node.js interface.

---

## 🔗 HubSpot Contacts List

**View all Pet Records:**  
[👉 Open Contacts List in HubSpot](https://app-eu1.hubspot.com/contacts/147127607/objects/0-1/views/all/list)

---

## 🧠 Tech Stack

- **Node.js**
- **Express.js**
- **Axios**
- **Pug** (templating)
- **CSS**
- **HubSpot CRM v3 API**

---

## 📌 Features

### 🏠 Homepage (`/`)
- Displays all existing Pet records in a structured table.
- Shows:
  - Name Pet  
  - Pet Age  
  - Pet Gender  
  - Pet Type  

### ➕ Add Pet (`/update-cobj`)
- A form to add a new Pet record to HubSpot.
- Automatically redirects back to the homepage after submission.

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zeiadd1310/Zeiad-Ramadan-iwh-i-practicum.git
   cd Zeiad-Ramadan-iwh-i-practicum

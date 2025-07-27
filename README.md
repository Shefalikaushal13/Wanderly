# ✈️ Wanderly

**Wanderly** is a full-stack travel planning web application that simplifies the way users plan trips. It collects preferences such as location, budget, number of people, and trip duration, and returns AI-generated itineraries with multiple hotel options — helping users get personalized travel suggestions within seconds.

---

## 🧠 What It Does

- Accepts **user inputs**: location, number of days, number of people, and budget.
- Sends this data to a backend hosted on **Firebase Firestore**.
- Uses **Gemini AI API** to dynamically generate personalized itineraries based on the user's input.
- Integrates **Google Maps & Places API** to fetch details like hotel names, photos, map locations, and relevant external links.
- Displays the **travel plans**, including hotel suggestions, day-wise itinerary, and destination highlights.
- Allows users to view and manage all their past trips in one place.
- Implements **route-based navigation** to view individual trips.
- Renders a fully responsive user interface for a seamless experience across devices.
- 
---

## 🚀 Tech Stack

| Layer        | Technology                              |
|--------------|------------------------------------------|
| Frontend     | React.js, Tailwind CSS                   |
| State Mgmt   | React Hooks, useState, useEffect         |
| Backend      | Firebase Firestore                       |
| AI API       | Gemini AI API (for itinerary generation) |
| Maps API     | Google Maps & Places API (for hotel info)|
| Routing      | React Router DOM                         |
| Deployment   | Vercel                                   |

---



## 🧪 How It Works

1. **User Input**  
   The user enters:
   - Destination  
   - Budget  
   - Number of days  
   - Number of people

2. **Data Storage**  
   - Inputs are saved to **Firebase Firestore**  
   - Passed to the backend to drive itinerary and hotel recommendation logic  

3. **AI Itinerary Generation**  
   - A structured prompt is sent to **Gemini AI API**  
   - Returns a detailed **day-by-day travel itinerary**

4. **Hotel & Location Insights**  
   - **Google Maps & Places API** fetch:
     - Nearby hotels
     - Photos
     - Ratings
     - Location on map
     - Website/booking links


---

## 🌐 Screenshots and Demo

- **Live App:** [Visit Wanderly](https://wanderly-itinerary-generator.vercel.app/)  
  > ⚠️ *Note: The deployed site may not be fully functional due to expiration of certain paid features. (e.g., Firebase, Gemini AI, or Google Maps quotas). For a complete experience, do check out the demo video in the screenshots and demo video section above.*

https://github.com/user-attachments/assets/27732321-9070-4d9f-be9e-d2cbfbef80a3

![Screenshot 2024-11-26 221640](https://github.com/user-attachments/assets/6530b224-ba2b-4c42-90b4-1be79aa1dca5)
![Screenshot 2024-11-26 221651](https://github.com/user-attachments/assets/6c2a59c0-167a-434e-b5fc-22d981a46b1c)
![Screenshot 2024-11-26 221703](https://github.com/user-attachments/assets/cd8be3e8-a711-4899-b840-4638a38ea47b)
![Screenshot 2024-11-26 221728](https://github.com/user-attachments/assets/5896b351-f60e-4fc8-8b7b-778cd0059d7a)
![Screenshot 2024-11-26 221818](https://github.com/user-attachments/assets/efd5d800-a85b-422e-8ea1-20efd4ea2f3a)
![Screenshot 2024-11-26 221854](https://github.com/user-attachments/assets/34141a4d-d996-4501-821f-c1a85aacf0ec)
![Screenshot 2024-11-26 221905](https://github.com/user-attachments/assets/71c7f95c-3574-4156-b4c2-71e3f13810de)
![Screenshot 2024-11-26 221920](https://github.com/user-attachments/assets/bf795575-770b-463a-b166-f289f00cc1b8)
![Screenshot 2024-11-26 222018](https://github.com/user-attachments/assets/1289a78e-848d-4b38-84bb-745b74ef8112)
![Screenshot 2024-11-26 222042](https://github.com/user-attachments/assets/9f42298d-a7f8-4dd6-8c5b-10a93ce57bb7)
![Screenshot 2024-11-26 222114](https://github.com/user-attachments/assets/d19d9b3b-a7c0-43ed-8be1-32e80fb431c1)


---

## ✍️ Author

**Shefali Kaushal**   
🔗 [LinkedIn](https://www.linkedin.com/in/shefalikaushal13) 
🌐 [Portfolio](https://shefali-kaushal-portfolio.netlify.app/)
💻 [Peerlist](https://peerlist.io/shefalikaushal)

---



# Implementation

## Introduction
TODO: Describe the system implemented (Describe the dataset. Are there any known issues? Describe any configuration data).
Dataset

The system uses a historical sites dataset, which includes:

Site Name: The official name of the historical site.

Location Coordinates: Latitude and longitude for map rendering.

Grade: Grade of site

Link to external site: Some of the entries provide a link to an external site that gives more information

**Known Issues:**

Large number of entries will make the map very laggy if using markers

Have to use symbols, which is more complicated



## Project Structure
TODO: Provide an outline of the project folder structure and the role of each file within it.
provide a table listing the number of jslint warnings/reports for each module.

index.html -> Contains all the html code, map configuration functions and event listeners.

script.js -> Contains the other functions, such as search, filter, get location.

style.css -> contains the style.

## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

**Major Components**

The application follows a Single-Page Application (SPA) architecture and consists of the following core components:

1. **User Interface (UI)**  
   - Developed using **HTML, CSS, and JavaScript** to create an interactive and visually engaging experience.  
   - Provides a dynamic interface for users to explore historical sites, including search and filtering functionalities.  

2. **Routing Mechanism**  
   - As an SPA, navigation is handled dynamically without full-page reloads.  
   - Implemented using JavaScript’s **History API** or hash-based routing to update the URL and maintain navigational state.  

3. **Data Handling and Management**  
   - The application retrieves historical site data from the **‘Listed Buildings in Bristol’ dataset**.  
   - Data is stored locally in a structured format (e.g., JSON) or fetched dynamically using the **Fetch API**.  

4. **Rendering Engine**  
   - JavaScript dynamically updates content based on user interactions.  
   - DOM manipulation techniques ensure efficient rendering of historical site details without reloading the page.  

5. **State Management**  
   - Application state, such as selected filters or search queries, is maintained using JavaScript variables.  
   - Local storage may be used to persist user preferences across sessions.
  
**Architectural Style**

The application follows the **Single-Page Application (SPA) architectural style**, characterized by:  
- A single initial HTML page that dynamically updates based on user interactions.  
- JavaScript-driven navigation and content updates instead of traditional full-page reloads.  
- Improved user experience by reducing server requests and enabling smooth transitions between views.  

This architecture ensures an efficient and responsive application while maintaining a lightweight implementation without a backend.


![Insert your component Diagram here](images/component.png)

## Bristol Open Data API
TODO: Document each query to Bristol Open Data

![UML Class diagrams representing JSON query results](images/class1.png)

![UML Class diagrams representing JSON query results](images/class2.png)
TODO: Repeat as necessary

# User guide
TODO: Explain how each use-case works by providing step-by-step screenshots for each use-case. This should be based on a tested scenario.

# Projektdokumentation

#### Navn: Christian Johansen

##### Hold: 3

##### Uddannelse: Webudvikler

##### Uddannelsessted: Roskilde tekniske skole


TRAINER - En web-app til fittnesscentre

[Link til site http://localhost:3000/]

[Link til trainer api http://localhost:3000/ ]

[Link til produktionsversion: https://webelieveinyou.netlify.app ]

Brugernavn: user1

Password: 1234

## Teknologier:

-   HTML
-   CSS
-   JavaScript

-   via React

---

### Ekstra React-pakker:
Emotion/Core:            https://www.npmjs.com/package/@emotion/css
Reach Router:            https://www.npmjs.com/package/@reach/router
React-Hook-Form:         https://www.npmjs.com/package/react-hook-form
Fontawesome til React:   https://fontawesome.com/how-to-use/on-the-web/using-with/react
React-Toastify:          https://www.npmjs.com/package/react-toastify
React-burger-sidenav:    https://www.npmjs.com/package/react-burger-sidenav



### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Når jeg arbejder alene bruger jeg ikke kanban, scrum eller lignende planlægningsværktøjer, men det mere old school: papir & blyant. Det er uhyre effektivt og der kan rettes, laves diagrammer og meget andet. 
 
Tidligere projekter har jeg arbejdet med en struktur der kunne se således ud:

Planlægning og overblik
Opbygning af struktur (html)
Opbygning af funktion og logik (javaScript)
Tilretning og … smukkesering (CSS)
Evaluering og oprydning 

Men dette projekt var opbygget på en måde, så man var nødt til at gøre mere ved hver side for kunne komme videre til den næste side. F.eks. var billederne som blev hentet, både lokalt og via api’et, lagt op i flere forskellige, store størrelser, så man var nødt til at style på dem, for at de kunne fungere som f.eks. knapper eller link-element. Så mit arbejdsstruktur har derfor været mere som “perler på en snor” … altså først Welcome, så Home, osv. 


### En beskrivelse af særlige punkter til bedømmelse

Jeg synes personligt at den indbyggede funktionelle logik er noget af charmen ved at kode:

F.eks. logik der viser eller fjerner knapper: her på detalje-siden:

````
 { token &&  
        
       ( (!thisClass?.users.find(user => user.username  === "user1")) && 
        
        <div><form onSubmit={justDoIt}>

        <button css={buttonstyle}>Sign Up!</button> 

        </form></div>)}

        { token &&  
      ((thisClass?.users.find(user => user.username  === "user1")) && 
        
       <div><form onSubmit={leaveIt}>
         

       <button css={buttonstyle}>Leave Class</button> 



        </form> </div> )}

```

### Argumentation for de valg jeg selvstændigt har truffet under løsningen af opgaven:

Mja, der skulle jo vælges en "burger-menu" med fuldt overlay. Dem har vi jo bygget masser af ... i vanilla JS, men aldrig i React. Så da valget stod mellem at "gen-lære" at kode burgermenuer ... eller hente en npm-pakke. Så bør valget altid falde på pakken.
Jeg har så valgt en meget skrabet model, React-burger-sidenav. Den har ikke det store forkromede udstyr, men til gengæld er den nærmest "plug - and -play" og får jobbet gjort.

---





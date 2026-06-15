# index.html — Build Instructions

## Navigation
← from: home.html (external launcher)
→ to: what.html (What is Gyan?), typesofgyan.html (5 Types of Gyan)

## Frame 1 Guidelines (node-id=19:773) — Splash / Initial State
  1- read frame from figma mcp node-id=19:773
     for image reference use @assets/images/

    1.1- bg.png: full canvas background, position absolute inset 0, z-index 0
    1.2- head.png: character, left=25.78%, top=48.26%, width=48.44%, height=auto, z-index 2
    1.3- wavesright.png: top=41.46%, left=67.74%, width=41.1%, z-index 1
    1.4- wavesleft.png: top=41.46%, left=-8.22%, width=41.1%, z-index 1
    1.5- No title text visible
    1.6- Home button: hidden (opacity 0)
    1.7- Language selector: hidden (opacity 0)
    1.8- Auto-transition to Frame 9 after 800ms

## Frame 9 Guidelines (node-id=19:704) — Main Menu State
  9- read frame from figma mcp node-id=19:704

    9.1- All Frame 1 elements remain (bg, head, waves)
    9.2- title "5 Types of Gyan": font=Spicy Rice, size=clamp(2rem,10.42vw,12rem)
         color=white, text-shadow 0 4px 4px rgba(0,0,0,0.25)
         top=15.91%, width=100%, text-align=center, z-index=3
         Animate: fade+slide in from above
    9.3- home button.png: left=4.22%, top=5.19%, width=4.17%, z-index=10
         Animate: fade in
    9.4- Language selector (E/H/G pill): top=5.89%, right=3.96%, z-index=10
         Style: white bg pill, gray text #5d5d5d, Baloo font
         Animate: fade in
    9.5- Waves shrink to bottom corners:
         wavesright: top=68%, left=82.36%, width=20.94%
         wavesleft: top=68%, left=-3.24%, width=20.88%

## Frame 8 Guidelines (node-id=18:240) — Interactive / Gyan Shapes State
  8- read frame from figma mcp node-id=18:240
     triggered on click of head character (state 1→2)

    8.1- Title becomes compact white pill banner at top:
         top=2.92%, left=50%, transform=translateX(-50%)
         background=white, border-radius=4.15vw, height=6.16%
         box-shadow 0 4px 4px rgba(0,0,0,0.25)
         Text: Spicy Rice 5vw, color=#8a38f5
    8.2- Home button and language selector: remain visible (same positions)
    8.3- Waves expand back to large position (same as Frame 1)
    8.4- Gyan shapes appear from inside head:
         - Green pill (#9bcc5e): top=18.32%, left=51.14%, width=9.95%, height=36.71%
           border-radius=5vw, box-shadow
         - Orange circle (#fe6f42): top=24.58%, left=38.31%, width=11.06%, border-radius=50%
           box-shadow
         - Blue rect top (#a1cafe): top=46.08%, left=37.78%, width=14.8%, height=13.28%
           border-radius=4.13vw
         - Blue rect bot (#a1cafe): top=56.49%, left=36.59%, width=15.2%, height=14.42%
           border-radius=4.13vw
         - Teal rect (#0a8479): top=55.63%, left=52.05%, width=16.45%, height=11.97%
           border-radius=4.13vw
    8.5- Left speech bubble "What is Gyan?":
         image: bubbleyellow.png (tail points right — default orientation)
         top=23.63%, left=17.77%, width=22.09%, height=34.3%
         Text: "What is Gyan?" font=Momo Trust Display 3.13vw, color=#8a38f5, centered
         on click → what.html
    8.6- Right speech bubble "5 Types of Gyan":
         image: bubbleyellow.png (mirrored: scaleX(-1))
         top=21.3%, left=61.77%, width=22.1%, height=34.3%
         Text: "5 Types of Gyan" font=Momo Trust Display 3.13vw, color=#8a38f5, centered
         on click → typesofgyan.html

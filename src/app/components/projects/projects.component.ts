import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { projectdescription } from 'src/app/models/projectdesc.model';
//import { projectservice } from 'src/app/services/projectservice.service';
import { FirebaseTSFirestore} from "firebasets/firebasetsFirestore/firebaseTSFirestore";
import { provideFirestore, deleteDoc, getDocs, setDoc, doc,  query, where, collection, getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth,Auth,signInWithEmailAndPassword } from '@angular/fire/auth';

let projectid = "project"



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})

export class ProjectsComponent {

  private firestore: FirebaseTSFirestore;
  dataRef;
  constructor(){
    this.firestore = new FirebaseTSFirestore();
    this.firestore.getDocument({
      path: ["content", projectid],
      onComplete: async (result) => {
        this.dataRef = "test";
        const db = getFirestore();
        let projecttext = document.getElementById("title");
        let description = document.getElementById("project-text");
        projecttext.innerHTML = this.dataRef.name;
        description.innerHTML = this.dataRef.description;

        const saveref = collection(db, "content", );
        const x = query(saveref, where("name", "!=", ""));
        const querySnapshot = await getDocs(x);  
        querySnapshot.forEach((docs) => {

          this.dataRef = docs.data();
          console.log(this.dataRef.title);

          const btn = document.createElement("button");
          const div = document.createElement("div");
          const db = getFirestore();
          let pname = this.dataRef.name;
          let gh = this.dataRef.gh;
          let web = this.dataRef.web;
          let webtitle = this.dataRef.webtitle;
          let ptext = this.dataRef.description;
          let readlink = this.dataRef.read;
          let imagelink = this.dataRef.img;
          let category = this.dataRef.category;

          
          

          function visiblemodal() {
            let userid = sessionStorage.getItem("userid");
            console.log(userid);

            if (userid != "") {  
              document.getElementById("modal-img").style.backgroundImage = "url(" + imagelink + ")";

              document.getElementById("modal").style.display = "flex";
              document.getElementById("imagelink").style.display = "block";
              (document.getElementById("imagelink") as HTMLInputElement).value = imagelink;
              
              document.getElementById("readlink").style.display = "block";
              (document.getElementById("readlink") as HTMLInputElement).value = readlink;

              document.getElementById("webtitle").style.display = "block";
              (document.getElementById("webtitle") as HTMLInputElement).value = webtitle;

              document.getElementById("category").style.display = "block";
              (document.getElementById("category") as HTMLInputElement).value = category;

              document.getElementById("weblink").style.display = "block";
              (document.getElementById("weblink") as HTMLInputElement).value = web;

              document.getElementById("ghlink").style.display = "block";
              (document.getElementById("ghlink") as HTMLInputElement).value = gh;

              document.getElementById("ptext").style.display = "block";
              (document.getElementById("ptext") as HTMLInputElement).value = ptext;

              document.getElementById("pname").style.display = "block";
              (document.getElementById("pname") as HTMLInputElement).value = pname;

              document.getElementById("title").style.display = "none";
              document.getElementById("project-text").style.display = "none";
              document.getElementById("git").style.display = "none";
              document.getElementById("web").style.display = "none";
              document.getElementById("readmore").style.display = "none";

              document.getElementById("delete-project").style.display = "block";
              document.getElementById("save").style.display = "block";

              document.getElementById("delete-project").addEventListener("click", deleteproject);


              function deleteproject() {
                console.log(pname)
                //let delref = doc(db, "content", pname)
                //deleteDoc(delref);
              };

            } else {
              document.getElementById("modal").style.display = "flex";
              document.getElementById("create").style.display = "none";
              document.getElementById("delete-project").style.display = "none";
              document.getElementById("imagelink").style.display = "none";
              document.getElementById("readlink").style.display = "none";
              document.getElementById("category").style.display = "none";

              document.getElementById("weblink").style.display = "none";
              document.getElementById("web").setAttribute("href", web);
              document.getElementById("web").innerHTML = webtitle;

              document.getElementById("webtitle").style.display = "none";

              document.getElementById("ghlink").style.display = "none";
              document.getElementById("git").setAttribute("href", gh);

              document.getElementById("ptext").style.display = "none";            
              document.getElementById("pname").style.display = "none";
              
              document.getElementById("title").style.display = "block";
              document.getElementById("title").innerHTML = pname;

              document.getElementById("project-text").style.display = "block";
              document.getElementById("project-text").innerHTML = ptext;

              document.getElementById("modal-img").style.backgroundImage = "url(" + imagelink + ")";

              document.getElementById("git").style.display = "block";
              document.getElementById("web").style.display = "block";
              document.getElementById("readmore").style.display = "block";
              document.getElementById("save").style.display = "none";
            }



            
          };
          
          div.innerHTML = category;
          div.id = "cat-check";
          div.className = "inv";

          if (category == "medie") {
            btn.className = "cards-medie"
          } else if (category == "studie") {
            btn.className = "cards-studie"
          } else if (category == "utvikling") {
            btn.className = "cards-utvikling"
          } else {
            btn.className = "cards"
          }
          
          btn.id = pname;
          btn.style.backgroundImage = "url(" + imagelink + ")";
          btn?.addEventListener("click", visiblemodal);
          btn.append(div)
          document.getElementById("card-container").appendChild(btn);

        });
      
      },
      
      onFail: (error) => {}
    })
  }



  projecttext: string = "namema";
  test = "Medie"

  createProject() {
    

    function handleClick(this: HTMLElement) {
        console.log("Clicked!");
        this.removeEventListener("click", handleClick);
    }

    const btn = document.createElement("button");
    const db = getFirestore();
    let pname = (document.getElementById("pname") as HTMLInputElement).value;
    let gh = (document.getElementById("ghlink") as HTMLInputElement).value;
    let web = (document.getElementById("weblink") as HTMLInputElement).value;
    let ptext = (document.getElementById("ptext") as HTMLInputElement).value;
    let readlink = (document.getElementById("readlink") as HTMLInputElement).value;
    let imagelink = (document.getElementById("imagelink") as HTMLInputElement).value;
    let category = (document.getElementById("category") as HTMLInputElement).value;
    let webtitle = (document.getElementById("webtitle") as HTMLInputElement).value;

    if (category == "medie") {
      btn.className = "cards-medie"
    } else if (category == "studie") {
      btn.className = "cards-studie"
    } else if (category == "utvikling") {
      btn.className = "cards-utvikling"
    } else {
      btn.className = "cards"
    }

    btn.id = pname;
    btn.style.background = "url(" + imagelink + ")";
    btn?.addEventListener("click", handleClick);


    document.getElementById("card-container").appendChild(btn);
    setDoc(
      doc(db, "content", pname), {
        name: pname,
        description: ptext,
        img: imagelink,
        read: readlink,
        gh: gh,
        web: web,
        webtitle: webtitle,
        category: category

      }
    );

  }

  visiblemodal() {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("create").style.display = "none";
    document.getElementById("imagelink").style.display = "none";
    document.getElementById("readlink").style.display = "none";
    document.getElementById("webtitle").style.display = "none";
    document.getElementById("weblink").style.display = "none";
    document.getElementById("ghlink").style.display = "none";
    document.getElementById("ptext").style.display = "none";
    document.getElementById("pname").style.display = "none";
    document.getElementById("category").style.display = "none";

    document.getElementById("title").style.display = "block";
    document.getElementById("project-text").style.display = "block";
    document.getElementById("git").style.display = "block";
    document.getElementById("web").style.display = "block";
    document.getElementById("readmore").style.display = "block";

    
  };

  createmodal() {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("create").style.display = "block";
    document.getElementById("imagelink").style.display = "block";
    document.getElementById("readlink").style.display = "block";
    document.getElementById("webtitle").style.display = "block";
    document.getElementById("category").style.display = "block";
    document.getElementById("weblink").style.display = "block";
    document.getElementById("ghlink").style.display = "block";
    document.getElementById("ptext").style.display = "block";
    document.getElementById("pname").style.display = "block";

    document.getElementById("title").style.display = "none";
    document.getElementById("project-text").style.display = "none";
    document.getElementById("git").style.display = "none";
    document.getElementById("web").style.display = "none";
    document.getElementById("readmore").style.display = "none";
  };

  closepinfo() {
    document.getElementById("modal").style.display = "none";
  };
  
  off() {
    document.getElementById("overlay").style.display = "none";
  };


  
  filtermedia() {
    let elements = document.querySelectorAll(".cards-utvikling" );
    let elementss = document.querySelectorAll(".cards-studie" );
    document.getElementById("media").style.backgroundColor = "black";
    document.getElementById("media").style.color = "white";
    document.getElementById("utvikling").style.backgroundColor = "#D0D0D7";
    document.getElementById("utvikling").style.color = "black";
    document.getElementById("tekster").style.backgroundColor = "#D0D0D7";
    document.getElementById("tekster").style.color = "black";

    elements.forEach((item: any) => {
      if (item.style.display == "none") {
        item.style.display = "flex";
      } else {
        item.style.display = 'none'
      };
      
    });

    elementss.forEach((item: any) => {
      if (item.style.display == "none") {
        item.style.display = "flex";
      } else {
        item.style.display = 'none'
      };
    });
  };




filterutvikling() {
  let elements = document.querySelectorAll(".cards-studie" );
  let elementss = document.querySelectorAll(".cards-medie" );

  elements.forEach((item: any) => {
    if (item.style.display == "none") {
      item.style.display = "flex";
    } else {
      item.style.display = 'none'
    };
    
  });

  elementss.forEach((item: any) => {
    if (item.style.display == "none") {
      item.style.display = "flex";
    } else {
      item.style.display = 'none'
    };
  });
};

filterstudie() {
  let elements = document.querySelectorAll(".cards-utvikling" );
  let elementss = document.querySelectorAll(".cards-medie" );

  elements.forEach((item: any) => {
    if (item.style.display == "none") {
      item.style.display = "flex";
    } else {
      item.style.display = 'none'
    };
    
  });

  elementss.forEach((item: any) => {
    if (item.style.display == "none") {
      item.style.display = "flex";
    } else {
      item.style.display = 'none'
    };
  });
};

}


// 1.Class Movie
//------------------
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// 1.title, which is a String representing the title of the movie
// 2.studio, which is a String representing the studio that made the movie
// 3.rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

/* a.Write a constructor for the class Movie, which takes a String representing 
the title of the movie, a String representing the studio, and a String representing 
the rating as its arguments, and sets the respective class properties to these values. */

class movie { 

    constructor(title, studio, rating) { 
  
      this.title = title; 
  
      this.studio =  studio; 
  
      this.rating = rating; 
  
    } 
    details(){
        console.log(`Title: ${this.title}`);
        console.log(`Studio: ${this.studio}`);
        console.log(`Rating: ${this.rating}`)
    }
  }
  
  let movieDetails = new movie("Varisu","Seven Screen Studio", "PG-14");
  movieDetails.details();
  
  //output
  //--------
  /*
  Title: Varisu
  Studio: Seven Screen Studio
  Rating: PG-14 */
  
  //---------------------------------------------------------------------------
  
  
  //b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  
  class movie { 
  
    constructor(title, studio, rating = "PG") { 
  
      this.title = title; 
  
      this.studio =  studio; 
  
      this.rating = rating; 
  
    } 
    details(){
         console.log(`Title: ${this.title}`);
         console.log(`Studio: ${this.studio}`);
         console.log(`Rating: ${this.rating}`)
            }
          }
          
          let movieDetails1 = new movie("Varisu","Seven Screen Studio");
          
          let movieDetails2 = new movie("Varisu","Seven Screen Studio","PG-14");
          
          movieDetails2.details();

  
  //output for movieDetais 1 :
  //--------------------------
  /*
  Title: Varisu
  Studio: Seven Screen Studio
  Rating: PG

  */

  //output for movieDetais 2 :
  //---------------------------
  /*
  Title: Varisu
  Studio: Seven Screen Studio
  Rating: PG-14
  */
  
//----------------------------------------------------------------------------
  
  
//   /*c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a 
//   new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
//   The returned array need not be full.*/
  
  class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
  
    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
  }
  
  let movie1 = new Movie("Varisu","Seven Screen Studio","PG");
  let movie2 = new Movie("Pathu Thala","Green Pen Studios","PG-13");
  let movie3 = new Movie("Veeran", "Studio Green", "PG-12");
  let movie4 = new Movie("Vikram", "Red Giant Movies", "PG");
  let movie5 = new Movie("Good Night", "Million Dollar Studios", "PG");
  
  let movieArray = [movie1, movie2, movie3, movie4, movie5];
  let pgMovies = Movie.getPG(movieArray);
  console.log(pgMovies); 
  
//   // Output: 
//---------------
//  [
//     Movie {
//       title: 'Varisu',
//       studio: 'Seven Screen Studio',
//       rating: 'PG'
//     },
//     Movie { title: 'Vikram', studio: 'Red Giant Movies', rating: 'PG' },
//     Movie {
//       title: 'Good Night',
//       studio: 'Million Dollar Studios',
//       rating: 'PG'
//     }
//   ]
  
//------------------------------------------------------------------------------
  
  
  
//   /*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//   the studio “Eon Productions”, and the rating “PG­13”*/
  
  class movie {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    details(){
                console.log(`Title: ${this.title}`);
                console.log(`Studio: ${this.studio}`);
                console.log(`Rating: ${this.rating}`)
            }
          }
          
          let movieDetails = new movie("Casino Royale", "Eon Productions", "PG13");
          movieDetails.details();
 

  // Output :
  //----------
// Title: Casino Royale
// Studio: Eon Productions
// Rating: PG13

  
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

    // EXERCISES --------------------------------------------------------------------------------------------------------------------------------------------------------

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    // function filterInventorsBorn(arr) {
    //   return arr.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
    // }
    // console.log(filterInventorsBorn(inventors));

    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    // function returnName(arr) {
    //   return arr.map((inventor) => inventor.first + " " + inventor.last);
    // }
    // console.log(returnName(inventors));
    

    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    // function sortAge(arr) {
    //   return arr.sort((a, b) => a.passed - b.year);
    // }
    // console.log(sortAge(inventors));

    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    // function howManyYears(arr) {
    //   return arr.reduce((total, inventor) => {
    //     return total + (inventor.passed - inventor.year);
    //   }, 0);
    // }
    // console.log(howManyYears(inventors));

    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // 5. Sort the inventors by years lived

    // function sortByLived(arr) {
    //   const newArr = arr.sort((a, b) => {
    //     const last = a.passed - a.year;
    //     const next = b.passed - b.year;
    //     return last - next;
    //   });
    //   return newArr;
    // }
    // console.log(sortByLived(inventors));

    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // const boulevards = [
    //   "Boulevard Auguste-Blanqui",
    //   "Boulevard Barbès",
    //   "Boulevard Beaumarchais",
    //   "Boulevard de l'Amiral-Bruix",
    //   "Boulevard Mortier",
    //   "Boulevard Poniatowski",
    //   "Boulevard Soult",
    //   "Boulevard des Capucines",
    //   "Boulevard de la Chapelle",
    //   "Boulevard de Clichy",
    //   "Boulevard du Crime",
    //   "Boulevard du Général-d'Armée-Jean-Simon",
    //   "Boulevard Haussmann",
    //   "Boulevard de l'Hôpital",
    //   "Boulevard des Italiens",
    //   "Boulevard Lefebvre",
    //   "Boulevard de la Madeleine",
    //   "Boulevard de Magenta",
    //   "Boulevard Malesherbes",
    //   "Boulevard Marguerite-de-Rochechouart",
    //   "Boulevard Montmartre",
    //   "Boulevard du Montparnasse",
    //   "Boulevard Raspail",
    //   "Boulevard Richard-Lenoir",
    //   "Boulevard Saint-Germain",
    //   "Boulevard Saint-Michel",
    //   "Boulevard de Sébastopol",
    //   "Boulevard de Strasbourg",
    //   "Boulevard du Temple",
    //   "Boulevard Voltaire",
    //   "Boulevard Hippolyte-Marquès"
    // ]

    // function includesDe(arr) {
    //   return arr.filter((boulevard) => boulevard.includes('de'));
    // }
    // console.log(includesDe(boulevards));


    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // function sortNames(arr) {
    //   /**
    //    * simple solution
    //    * because first name always comes first
    //    */
    //   // return arr.sort((a, b) => a.localeCompare(b));

    //   return arr.sort((a, b) => {
    //     const nameA = a.toLowerCase();
    //     const nameB = b.toLowerCase();
    //     if (nameA < nameB) return -1;
    //     if (nameA > nameB) return 1;
    //     return 0;
    //   });
      
    //   /**
    //    * complex solution that returns the names in original order
    //    * of first name + last name
    //    */
    //   // return arr
    //   //   .slice()
    //   //   .sort((a, b) => {
    //   //     const lastNameA = a.split(', ')[0];
    //   //     const lastNameB = b.split(', ')[0];
    //   //     if (lastNameA < lastNameB) return -1;
    //   //     if (lastNameA > lastNameB) return 1;
    //   //     return 0;
    //   //   })
    //   //   .map(name => {
    //   //     const [last, first] = name.split(', ');
    //   //     return first + ' ' + last;
    //   //   });
    // }
    // console.log(sortNames(people));

    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    // function countInstances(arr) {
    //   return arr.reduce((total, item) => {
    //     total[item] = (total[item] || 0) + 1; 
    //     return total;
    //   }, {});
    // }

    // console.log(countInstances(data));

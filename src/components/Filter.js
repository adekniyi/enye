export const sortData = (sortBy, target, setter) => {
    let sorted = target;
    let mutable = target;
    try {
      const timeSpan = (span) => {
        const sortTime = (span) => {
          const age = new Date(span);
          const now = new Date();
          const day = 1000 * 60 * 60 * 24;
          const diffTime = Math.abs(now - age);
          console.log(Math.floor(diffTime / day));
          return span === "dob"
            ? Math.floor(diffTime / day / 365)
            : Math.floor(diffTime / day);
        };
        sorted.sort((a, b) => {
          // return sortTime(a) < sortTime(b) ? -1 : 1;
          if (sortTime(a[span]) < sortTime(b[span])) {
            return -1;
          }
          if (sortTime(a[span]) > sortTime(b[span])) {
            return 1;
          }
          return 0;
        });
      };
  
      if (sortBy === "name") {
        sorted.sort((a, b) => {
          const first =
            a.FirstName.toLowerCase().trim() +
            " " +
            a.LastName.toLowerCase().trim();
          const second =
            b.FirstName.toLowerCase().trim() +
            " " +
            b.LastName.toLowerCase().trim();
          if (first < second) {
            return -1;
          }
          if (first > second) {
            return 1;
          }
          return 0;
        });
      } else if (sortBy === "male") {
        sorted = mutable.filter((order) => order.Gender.toLowerCase() === "male");
      } else if (sortBy === "female") {
        sorted = mutable.filter(
          (order) => order.Gender.toLowerCase() === "female"
        );
      } else if (sortBy === "email") {
        sorted.sort((a, b) => {
          const firstMail = a.Email.toLowerCase().trim();
          const secondMail = b.Email.toLowerCase().trim();
          return firstMail < secondMail ? -1 : firstMail > secondMail ? 1 : 0;
        });
      } else if (sortBy === "age") {
        timeSpan("dob");
      } else if (sortBy === "date") {
        timeSpan("createdAt");
      }
      return setter([...sorted]);
    } catch (err) {
      //   at this point sorted remains unchanged
      console.log("Unable to sort : ", err);
      return setter([...sorted]);
    }
  };
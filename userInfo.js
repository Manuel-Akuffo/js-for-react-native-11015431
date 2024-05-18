import { strings, formattedStrings} from "./arrayManipulation.js";

function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) => ({
      originalName: name,
      modifiedName: modifiedNames[index],
      id: index + 1
  }));
}


const userProfiles = createUserProfiles(strings, formattedStrings);

console.log(userProfiles);



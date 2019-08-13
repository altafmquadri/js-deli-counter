function takeANumber(currLine, newPerName) {
  currLine.push(newPerName);
  return `Welcome, ${newPerName}. You are number ${currLine.length} in line.`;
}

function nowServing(currLine, perName) {
  if (currLine.length > 1) {
    perName = currLine.shift();
    return `Currently serving ${perName}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(currLine, listLine) {
  var ll = [];
  if (currLine.length > 1) {
    for (let cl = 0; cl < currLine.length; cl++){
      ll.push(`${cl+1}. ${currLine[cl]}`);
      listLine = ll.join(', ');
    } return `The line is currently: ${listLine}`;
  } else {
    return "The line is currently empty.";
  }
}

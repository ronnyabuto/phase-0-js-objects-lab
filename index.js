// Task 1: Create the attendee object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Task 2: Function to log attendee name
function logAttendeeName(attendeeObject) {
  console.log(attendeeObject.name);
}

// Task 4: Function to log ticket price
function logTicketPrice(attendeeObject) {
  console.log(attendeeObject.ticketPrice);
}

// Task 5: Function to update ticket type
function updateTicketType(attendeeObject, newTicketType) {
  attendeeObject.ticketType = newTicketType;
}

// Task 6: Function to update ticket price
function updateTicketPrice(attendeeObject, newPrice) {
  attendeeObject.ticketPrice = newPrice;
}

// Task 7: Function to remove the event property
function removeEventProperty(attendeeObject) {
  delete attendeeObject.event;
}

// Task 8: Function to add a checked-in property
function addCheckedInProperty(attendeeObject) {
  attendeeObject.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};
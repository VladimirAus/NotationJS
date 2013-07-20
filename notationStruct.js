function Note (strNote, start, duration) {
    this.note = theName; // note
    this.octave = 2; // number
    this.start = start; // ?
    this.duration = suration; //? 
}

Note.prototype = {
    constructor: Note,
    processNoteFromString:function (noteToAdd)  {
        this.note = theName; // note
    	this.octave = 2;
    }
}

function Chord (strChord, notes) {
    this.chord = theName; // note
    this.variation = 2; // number
    this.notes = notes;
}

Chord.prototype = {
    constructor: Chord,
    addNotes:function (noteToAdd)  {
        this.notes.push(noteToAdd);
    }
    validate:function ()  {
        return true;
    }
}

function Instrument (name) {
    this.name = name;
}

Instrument.prototype = {
    constructor: Instrument
}

// Variation of the intrument
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  return [19, 20, 34].map((classes) => new ClassRoom(classes));
}

interface Course {
  id: string;
  name: string;
  units: number;
  value: number;
  onUpdate: (id: string, newValue: number) => void;
}

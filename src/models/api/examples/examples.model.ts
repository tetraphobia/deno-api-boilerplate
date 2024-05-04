interface Example {
  id: string;
  title: string;
  description: string;
}

class Examples extends Map<string, Example> {
  constructor() {
    super();
  }

  findAll(): Example[] {
    return Array.from(this.values());
  }

  findOne(id: string): Example | null {
    return this.get(id) || null;
  }
}

const db = new Examples();

db.set("1", {
  id: "1",
  title: "Example title",
  description: "Example description",
});

db.set("2", {
  id: "2",
  title: "Example title",
  description: "Example description",
});

db.set("3", {
  id: "3",
  title: "Example title",
  description: "Example description",
});

export default db;

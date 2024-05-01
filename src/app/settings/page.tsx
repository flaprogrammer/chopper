import { Metadata } from "next";
import { useEffect, useState } from "react";
import { fetchCharacters } from "@/app/api";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings page",
};

export default async function Settings() {
  const { results: characters } = await fetchCharacters();

  return (
    <main>
      <h3>Settings page</h3>
      <div>
        {characters.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
      </div>
    </main>
  );
}

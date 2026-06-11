import { useEffect } from "react";

// Sets the document title and meta description for a page.
// Usage: <PageMeta title="..." description="..." /> at the top of any page component.
export default function PageMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
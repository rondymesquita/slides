import { describe, expect, it } from 'vitest';
import { parseFrontMatter } from './parse-frontmatter';

describe('parse-parseFrontMatter', () => {
  it('', () => {
    const value = `---
		title: Awesome Title
		description: Describe this awesome content
		tags:
			- "great"
			- "awesome"
			- "rad"
		---

		# My Presentation {data-id=title}

		Description
		`;

    expect(parseFrontMatter(value)).toEqual({});
  });
});

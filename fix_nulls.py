import json
import re

with open('src/data/publication.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the publications array and fix nulls
# Replace null with empty string for string fields
content = re.sub(r'"pages":\s*null,', '"pages": "",', content)
content = re.sub(r'"doi":\s*null,', '"doi": "",', content)
content = re.sub(r'"isbn":\s*null,', '"isbn": "",', content)
content = re.sub(r'"url":\s*null,', '"url": "",', content)
content = re.sub(r'"pdfUrl":\s*null,', '"pdfUrl": "",', content)
content = re.sub(r'"abstract":\s*null,', '"abstract": "",', content)
content = re.sub(r'"volume":\s*null,', '"volume": "",', content)
content = re.sub(r'"issue":\s*null,', '"issue": "",', content)

# For year, we can use 0 or keep it as a number
content = re.sub(r'"year":\s*null,', '"year": 0,', content)

with open('src/data/publication.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed null values")

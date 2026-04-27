import os

directory = '.'

replacements = [
    ('https://www.linkedin.com/in/karthik-ahammed-raheem-aa777325a', 'https://www.linkedin.com/in/karthikbabudatanalyst/'),
    ('https://github.com/Karthikbabu', 'https://github.com/Karthi2001MCA'),
]

# File extensions to modify
valid_extensions = {'.html', '.txt', '.md', '.tex', '.js', '.css', '.json'}

for root, dirs, files in os.walk(directory):
    # skip .git if exists
    if '.git' in dirs:
        dirs.remove('.git')
        
    for file in files:
        if any(file.endswith(ext) for ext in valid_extensions):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements:
                    new_content = new_content.replace(old, new)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")
            except Exception as e:
                print(f"Could not process {filepath}: {e}")

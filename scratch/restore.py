import json
import os

log_path = r"C:\Users\JC\.gemini\antigravity\brain\b01b7edc-5774-49a0-8c43-ca419e3b237e\.system_generated\logs\transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            # Find the tools calls or content
            if "tool_calls" in data and data["tool_calls"]:
                for tc in data["tool_calls"]:
                    if tc.get("name") == "replace_file_content":
                        args = tc.get("args")
                        if isinstance(args, str):
                            # Sometimes args is serialized as string
                            try:
                                args = json.loads(args)
                            except:
                                pass
                        if isinstance(args, dict):
                            target_file = args.get("TargetFile", "")
                            if "style.css" in target_file:
                                print("--- FOUND style.css replace_file_content ---")
                                print("StartLine:", args.get("StartLine"))
                                print("EndLine:", args.get("EndLine"))
                                print("TargetContent length:", len(args.get("TargetContent", "")))
                                print("ReplacementContent length:", len(args.get("ReplacementContent", "")))
                                # Write to a temp file
                                with open("style_restore.txt", "w", encoding="utf-8") as out:
                                    out.write(args.get("ReplacementContent", ""))
                                print("Saved to style_restore.txt")
                            elif "script.js" in target_file:
                                print("--- FOUND script.js replace_file_content ---")
                                print("StartLine:", args.get("StartLine"))
                                print("EndLine:", args.get("EndLine"))
                                print("TargetContent length:", len(args.get("TargetContent", "")))
                                print("ReplacementContent length:", len(args.get("ReplacementContent", "")))
                                # Write to a temp file
                                with open("script_restore.txt", "w", encoding="utf-8") as out:
                                    out.write(args.get("ReplacementContent", ""))
                                print("Saved to script_restore.txt")
        except Exception as e:
            pass

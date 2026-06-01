$logPath = "C:\Users\JC\.gemini\antigravity\brain\b01b7edc-5774-49a0-8c43-ca419e3b237e\.system_generated\logs\transcript.jsonl"
$lines = Get-Content -Path $logPath -Encoding UTF8

foreach ($line in $lines) {
    try {
        $data = ConvertFrom-Json $line -ErrorAction SilentlyContinue
        if ($null -ne $data -and $null -ne $data.tool_calls) {
            foreach ($tc in $data.tool_calls) {
                if ($tc.name -eq "replace_file_content") {
                    $args = $tc.args
                    # Sometimes args is a JSON string itself
                    if ($args -is [string]) {
                        $argsObj = ConvertFrom-Json $args -ErrorAction SilentlyContinue
                        if ($null -ne $argsObj) { $args = $argsObj }
                    }
                    
                    $targetFile = $args.TargetFile
                    if ($targetFile -like "*style.css*") {
                        Write-Host "FOUND style.css replace_file_content"
                        $args.ReplacementContent | Out-File -FilePath "scratch/style_restore.txt" -Encoding UTF8
                        Write-Host "Saved style.css content to scratch/style_restore.txt"
                    }
                    elseif ($targetFile -like "*script.js*") {
                        Write-Host "FOUND script.js replace_file_content"
                        $args.ReplacementContent | Out-File -FilePath "scratch/script_restore.txt" -Encoding UTF8
                        Write-Host "Saved script.js content to scratch/script_restore.txt"
                    }
                }
            }
        }
    }
    catch {
        # Ignore errors
    }
}

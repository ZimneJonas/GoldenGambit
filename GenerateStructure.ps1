# Define paths
$RootPath = Get-Location
$SrcPath = "$RootPath\src"

# Get and print the full structure of src
$SrcStructure = Tree $SrcPath /F | Select-Object -Skip 2

# Get the files from the root
$RootFiles = Get-ChildItem $RootPath -File | ForEach-Object {
    "$($_.Name)"
}

# Merge the two outputs
$Output = $SrcStructure + $RootFiles

# Display the merged output
$Output | Write-Output






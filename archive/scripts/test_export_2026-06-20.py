import sys
import os
import win32com.client

def export_pptx_to_png(pptx_path, out_dir):
    pptx_path = os.path.abspath(pptx_path)
    out_dir = os.path.abspath(out_dir)
    
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)
    
    powerpoint = win32com.client.Dispatch("PowerPoint.Application")
    # powerpoint.Visible = True # Usually keep hidden, but for some versions it must be visible. Let's try without forcing.
    
    try:
        presentation = powerpoint.Presentations.Open(pptx_path, WithWindow=False)
        
        # ppSaveAsPNG = 18
        presentation.SaveAs(out_dir, 18)
        
        presentation.Close()
        print(f"Successfully exported to {out_dir}")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        powerpoint.Quit()

if __name__ == "__main__":
    pptx_file = sys.argv[1]
    output_dir = sys.argv[2]
    export_pptx_to_png(pptx_file, output_dir)

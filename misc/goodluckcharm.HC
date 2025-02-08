Bool WinInside(I64 x,I64 y,CTask *task=NULL,I64 border=0)
{
  if (!task) task=Fs;
  if (TaskValidate(task) && Bt(&task->display_flags,DISPLAYf_SHOW)) {
    if (Bt(&task->display_flags,DISPLAYf_NO_BORDER))
      border=0;
    if (task->pix_left-border<=x<=task->pix_right+border &&
	  task->pix_top-border<=y<=task->pix_bottom+border)
      return TRUE;
  }
  return FALSE;
}
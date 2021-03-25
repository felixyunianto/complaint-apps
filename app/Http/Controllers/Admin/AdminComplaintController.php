<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Complaint;
use App\Models\ComplaintCategory;

class AdminComplaintController extends Controller
{
    public function index(){
        $waiting = Complaint::with(['complaintCategory', 'user'])->where('status', 'Waiting')->orderBy('created_at')->get();
        $approved = Complaint::with(['complaintCategory', 'user'])->where('status', 'Approved')->orderBy('created_at')->get();
        $declines = Complaint::with(['complaintCategory', 'user'])->where('status', 'Decline')->orderBy('created_at')->get();
        
        

        return view('pages.complaint.index', compact('approved', 'waiting', 'declines'));
    }

    public function show($id){
        $complaint = Complaint::with(['complaintCategory', 'user'])->findOrFail($id);
        // dd($complaint);

        return view('pages.complaint.complaint-detail', compact('complaint'));
    }

    public function update(Request $request, $id){
        $complaint = Complaint::findOrFail($id);
        $complaint->update([
            'status' => $request->status
        ]);

        return redirect()->route('complaint.index');
    }

}
